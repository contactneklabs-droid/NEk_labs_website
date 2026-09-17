import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API Key
// Note: You must add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key');

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // 1. Send the Welcome / Lead Magnet email to the CLIENT
    // IMPORTANT: To use a custom domain, you must verify it in Resend. 
    // Using 'onboarding@resend.dev' allows you to test sending emails TO the email address you signed up to Resend with.
    // 1. Send the Welcome / Lead Magnet email to the CLIENT
    const welcomeResponse = await resend.emails.send({
      from: 'NEk LABS <onboarding@resend.dev>', // Update this to your verified domain later
      to: [email],
      subject: 'Welcome to NEk. Labs — Experimental Technology',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h1 style="text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 24px;">Welcome to NEk. Labs</h1>
          <p style="font-size: 16px; line-height: 1.5; color: #444;">
            Thanks for joining our inner circle. We build digital systems for the next generation of brands.
          </p>
          <p style="font-size: 16px; line-height: 1.5; color: #444;">
            As promised, here is your exclusive access to our latest experimental drops and insights. Stay tuned for what's next.
          </p>
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #888;">
            NEk. Labs • Web, AI, Automation
          </div>
        </div>
      `,
    });

    if (welcomeResponse.error) {
      console.error('Welcome Email Error:', welcomeResponse.error);
    }

    // 2. Send an internal notification email to YOU (the owner)
    const notificationResponse = await resend.emails.send({
      from: 'NEk LABS <onboarding@resend.dev>', // Update this to your verified domain later
      to: ['contactneklabs@gmail.com'], // This goes directly to you
      subject: '🎉 New Newsletter Subscriber: ' + email,
      html: `
        <div style="font-family: sans-serif; color: #111;">
          <h2 style="margin-bottom: 16px;">New Lead Captured!</h2>
          <p>You have a new subscriber to the NEk. Labs newsletter:</p>
          <p style="font-size: 18px; font-weight: bold; padding: 16px; background: #f4f4f5; border-radius: 8px; display: inline-block;">
            ${email}
          </p>
          <p style="margin-top: 24px; font-size: 14px; color: #666;">
            Time: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    if (notificationResponse.error) {
      console.error('Notification Email Error:', notificationResponse.error);
    }

    // Even if one fails, we return success to the UI to complete the animation loop
    return NextResponse.json({ 
      success: true, 
      welcome: welcomeResponse,
      notification: notificationResponse 
    });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
