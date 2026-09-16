import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { leadSchema } from '@/lib/validations';
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// In-memory structures for rate limiting and concurrency locking (Fallback)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const emailLocks = new Map<string, Promise<void>>();

const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

// Initialize Upstash RateLimit if env vars are present
const hasRedisConfig = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;
let ratelimit: Ratelimit | null = null;

if (hasRedisConfig) {
  ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "1 m"),
    analytics: true,
  });
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate Limiting Check
    if (ratelimit) {
      const { success } = await ratelimit.limit(`ratelimit_${ip}`);
      if (!success) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
      }
    } else {
      // In-memory fallback
      const now = Date.now();
      const rateData = rateLimitMap.get(ip);
      if (rateData) {
        if (now - rateData.timestamp < RATE_LIMIT_WINDOW_MS) {
          if (rateData.count >= MAX_REQUESTS_PER_WINDOW) {
            return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
          }
          rateData.count++;
        } else {
          rateLimitMap.set(ip, { count: 1, timestamp: now });
        }
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    }

    const body = await request.json();

    // Honeypot Check (Issue #05)
    if (body.website && body.website.trim() !== '') {
      // Reject naive bots that populate the honeypot
      return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 });
    }

    // Server-side validation with Zod
    const validationResult = leadSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({ error: 'Validation failed', details: validationResult.error.format() }, { status: 400 });
    }
    
    const { name, email, company, social, categories, details, goal, budget, timeline, source } = validationResult.data;

    // Validate payload size roughly (extra precaution)
    if (details.length > 5000 || name.length > 100 || email.length > 254) {
      return NextResponse.json({ error: 'Payload too large' }, { status: 400 });
    }

    // Normalize email (Issue #01)
    const normalizedEmail = email.trim().toLowerCase();
    const finalSource = source || 'BOOK_YOUR_MEET';

    // Concurrency Lock per normalized email (Issue #01)
    while (emailLocks.has(normalizedEmail)) {
      await emailLocks.get(normalizedEmail);
    }
    
    let resolveLock: () => void;
    const lockPromise = new Promise<void>((resolve) => { resolveLock = resolve; });
    emailLocks.set(normalizedEmail, lockPromise);

    try {
      // Google API Configuration Check
      if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
        console.error('Missing Google API environment variables');
        return NextResponse.json({ error: 'Unable to process your request at this time.' }, { status: 500 });
      }

      const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });
      const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
      
      const timestamp = new Date().toISOString();
      const projectType = Array.isArray(categories) ? categories.join(', ') : categories;

      // Fetch existing rows
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Sheet1!A:S', 
      });

      const rows = response.data.values || [];
      let existingRowIndex = -1;
      let existingRowData: string[] = [];

      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const rowEmail = (row[2] || '').trim().toLowerCase();
        if (rowEmail === normalizedEmail) {
          existingRowIndex = i;
          existingRowData = row;
          break;
        }
      }

      if (existingRowIndex >= 0) {
        // Update existing lead
        const currentCount = parseInt(existingRowData[18] || '1', 10);
        
        const updatedRow = [...existingRowData];
        while (updatedRow.length < 19) updatedRow.push("");

        // Preserve and update existing fields safely
        if (name) updatedRow[1] = name;
        if (company) updatedRow[4] = company;
        if (social) updatedRow[5] = social;
        if (projectType) updatedRow[6] = projectType;
        if (goal) updatedRow[7] = goal;
        if (details) updatedRow[8] = details;
        if (budget) updatedRow[9] = budget;
        if (timeline) updatedRow[10] = timeline;
        
        updatedRow[16] = finalSource; // Source
        updatedRow[17] = timestamp; // Last Updated
        updatedRow[18] = (currentCount + 1).toString(); // Submission Count

        const rangeToUpdate = `Sheet1!A${existingRowIndex + 1}:S${existingRowIndex + 1}`;

        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: rangeToUpdate,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [updatedRow],
          },
        });

      } else {
        // Create new lead
        const row = [
          timestamp,
          name,
          normalizedEmail,
          "", // Phone
          company || "",
          social || "",
          projectType,
          goal || "",
          details,
          budget || "",
          timeline || "",
          "", // Meeting Date
          "", // Meeting Time
          "Asia/Kolkata", // Timezone
          "", // Meeting Link
          "NEW", // Status
          finalSource, // Source
          timestamp, // Last Updated
          "1" // Submission Count
        ];

        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: 'Sheet1!A1:S1',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [row],
          },
        });
      }

      return NextResponse.json({ success: true });
    } finally {
      // Safely release the execution lock
      if (resolveLock!) {
        resolveLock();
      }
      emailLocks.delete(normalizedEmail);
    }
  } catch (error: any) {
    console.error('Google Sheets POST Error:', error);
    // Generic error to prevent internal leakage (Issue #02)
    return NextResponse.json({ error: 'Unable to process your request at this time.' }, { status: 500 });
  }
}
