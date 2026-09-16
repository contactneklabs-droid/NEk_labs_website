import { z } from "zod";

const categories = ["WEBSITE", "AI SYSTEM", "AUTOMATION", "SAAS / PRODUCT", "DIGITAL EXPERIENCE", "OTHER"] as const;
const budgets = ["UNDER ₹25K", "₹25K – ₹50K", "₹50K – ₹1L", "₹1L – ₹3L", "₹3L+", "NOT SURE YET"] as const;
const timelines = ["AS SOON AS POSSIBLE", "THIS MONTH", "1–3 MONTHS", "3+ MONTHS", "JUST EXPLORING"] as const;

export const leadSchema = z.object({
  name: z.string().min(2, "Name is required (at least 2 characters)"),
  email: z.string().email("Please provide a valid email address"),
  company: z.string().optional(),
  social: z.string().optional(),
  categories: z.array(z.enum(categories)).min(1, "Please select at least one project category"),
  details: z.string().min(10, "Please provide more details about your project"),
  goal: z.string().min(5, "Please define your primary goal"),
  budget: z.enum(budgets, { errorMap: () => ({ message: "Please select a budget" }) }),
  timeline: z.enum(timelines, { errorMap: () => ({ message: "Please select a timeline" }) }),
  source: z.string().default("BOOK_YOUR_MEET")
});

export type LeadFormData = z.infer<typeof leadSchema>;
