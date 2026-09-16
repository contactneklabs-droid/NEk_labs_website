import { z } from "zod";
export const leadSchema = z.object({
  name: z.string().min(2, "Name is required (at least 2 characters)"),
  email: z.string().email("Please provide a valid email address"),
  company: z.string().optional(),
  social: z.string().optional(),
  categories: z.array(z.enum(["WEBSITE", "AI SYSTEM", "AUTOMATION", "SAAS / PRODUCT", "DIGITAL EXPERIENCE", "OTHER"])).min(1, "Please select at least one project category"),
  details: z.string().min(10, "Please provide more details about your project"),
  goal: z.string().min(5, "Please define your primary goal"),
  budget: z.enum(["UNDER ₹25K", "₹25K – ₹50K", "₹50K – ₹1L", "₹1L – ₹3L", "₹3L+", "NOT SURE YET"], { errorMap: () => ({ message: "Please select a budget" }) }),
  timeline: z.enum(["AS SOON AS POSSIBLE", "THIS MONTH", "1–3 MONTHS", "3+ MONTHS", "JUST EXPLORING"], { errorMap: () => ({ message: "Please select a timeline" }) }),
  source: z.string().default("BOOK_YOUR_MEET")
});

export type LeadFormData = z.infer<typeof leadSchema>;
