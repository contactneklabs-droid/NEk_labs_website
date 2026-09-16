"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import MagneticElement from "./MagneticElement";
import { leadSchema } from "@/lib/validations";

type ProjectCategory = "WEBSITE" | "AI SYSTEM" | "AUTOMATION" | "SAAS / PRODUCT" | "DIGITAL EXPERIENCE" | "OTHER";
type Budget = "UNDER ₹25K" | "₹25K – ₹50K" | "₹50K – ₹1L" | "₹1L – ₹3L" | "₹3L+" | "NOT SURE YET";
type Timeline = "AS SOON AS POSSIBLE" | "THIS MONTH" | "1–3 MONTHS" | "3+ MONTHS" | "JUST EXPLORING";

interface FormData {
  name: string;
  email: string;
  company: string;
  social: string;
  categories: ProjectCategory[];
  details: string;
  goal: string;
  budget: Budget | "";
  timeline: Timeline | "";
  source: string;
}

const CATEGORIES: ProjectCategory[] = ["WEBSITE", "AI SYSTEM", "AUTOMATION", "SAAS / PRODUCT", "DIGITAL EXPERIENCE", "OTHER"];
const BUDGETS: Budget[] = ["UNDER ₹25K", "₹25K – ₹50K", "₹50K – ₹1L", "₹1L – ₹3L", "₹3L+", "NOT SURE YET"];
const TIMELINES: Timeline[] = ["AS SOON AS POSSIBLE", "THIS MONTH", "1–3 MONTHS", "3+ MONTHS", "JUST EXPLORING"];

export default function BookingEngine() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    social: "",
    categories: [],
    details: "",
    goal: "",
    budget: "",
    timeline: "",
    source: "BOOK_YOUR_MEET"
  });

  const handleSubmit = async () => {
    setError("");
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('API Error');
      }
      
      setSubmitSuccess(true);
    } catch (err) {
      console.error(err);
      setError("SOMETHING WENT WRONG. PLEASE TRY AGAIN.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setError("");
    if (step === 1) {
      const result = leadSchema.pick({ name: true, email: true }).safeParse(data);
      if (!result.success) {
        setError(result.error.issues[0].message.toUpperCase());
        return;
      }
    }
    if (step === 2) {
      const result = leadSchema.pick({ categories: true }).safeParse(data);
      if (!result.success) {
        setError(result.error.issues[0].message.toUpperCase());
        return;
      }
    }
    if (step === 3) {
      const result = leadSchema.pick({ details: true, goal: true }).safeParse(data);
      if (!result.success) {
        setError(result.error.issues[0].message.toUpperCase());
        return;
      }
    }
    if (step === 4) {
      const result = leadSchema.pick({ budget: true }).safeParse(data);
      if (!result.success) {
        setError(result.error.issues[0].message.toUpperCase());
        return;
      }
    }
    if (step === 5) {
      const result = leadSchema.pick({ timeline: true }).safeParse(data);
      if (!result.success) {
        setError(result.error.issues[0].message.toUpperCase());
        return;
      }
    }
    
    if (step === 5) {
      // Proceed to review/submit step
      setStep(6);
    } else {
      setStep(s => s + 1);
    }
  };

  const prevStep = () => {
    if (isSubmitting || submitSuccess) return;
    setError("");
    setStep(s => Math.max(1, s - 1));
  };

  const toggleCategory = (cat: ProjectCategory) => {
    setData(prev => ({
      ...prev,
      categories: prev.categories.includes(cat) 
        ? prev.categories.filter(c => c !== cat)
        : [...prev.categories, cat]
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-24 px-6 min-h-[60vh] flex flex-col justify-center">
      
      {/* Progress Indicator */}
      {!submitSuccess && (
        <div className="flex gap-4 mb-16 text-xs font-mono uppercase tracking-widest border-b border-zinc-900 pb-6 flex-wrap">
          {[
            { num: "01", label: "IDENTITY" },
            { num: "02", label: "PROJECT" },
            { num: "03", label: "DETAILS" },
            { num: "04", label: "BUDGET" },
            { num: "05", label: "TIMELINE" },
            { num: "06", label: "CONFIRM" }
          ].map((s, i) => (
            <div key={i} className={`flex gap-2 ${step === i + 1 ? "text-white" : "text-zinc-700"}`}>
              <span>{s.num}</span>
              <span className="font-bold">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      {error && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 font-mono text-xs uppercase tracking-widest mb-8 border border-red-900 bg-red-950/20 p-4">
          ERROR: {error}
        </motion.div>
      )}

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Who are you?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name-input" className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Name *</label>
                  <input id="name-input" required value={data.name} onChange={e => setData({...data, name: e.target.value})} type="text" className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-white transition-colors" aria-required="true" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email-input" className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Email *</label>
                  <input id="email-input" required value={data.email} onChange={e => setData({...data, email: e.target.value})} type="email" className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-white transition-colors" aria-required="true" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company-input" className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Company / Brand</label>
                  <input id="company-input" value={data.company} onChange={e => setData({...data, company: e.target.value})} type="text" className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="social-input" className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Website / Social</label>
                  <input id="social-input" value={data.social} onChange={e => setData({...data, social: e.target.value})} type="text" className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-white transition-colors" />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <h2 className="text-3xl font-black uppercase tracking-tighter">What are you looking to build?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="group" aria-label="Project Categories">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => toggleCategory(cat)}
                    role="checkbox"
                    aria-checked={data.categories.includes(cat)}
                    className={`p-6 border text-left font-bold uppercase tracking-widest text-sm transition-all ${data.categories.includes(cat) ? 'border-white bg-white text-black' : 'border-zinc-800 hover:border-zinc-500 text-zinc-400'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Tell us about it.</h2>
              <div className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="details-input" className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Description *</label>
                  <textarea id="details-input" rows={4} placeholder="What are you trying to build, improve, automate or launch?" value={data.details} onChange={e => setData({...data, details: e.target.value})} className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-white transition-colors resize-none placeholder:text-zinc-800" aria-required="true" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="goal-input" className="text-xs text-zinc-500 uppercase tracking-widest font-bold">What's the goal? *</label>
                  <textarea id="goal-input" rows={3} placeholder="Desired outcome or metric..." value={data.goal} onChange={e => setData({...data, goal: e.target.value})} className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-white transition-colors resize-none placeholder:text-zinc-800" aria-required="true" />
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <h2 className="text-3xl font-black uppercase tracking-tighter">What's your expected investment?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" role="radiogroup" aria-label="Budget Options">
                {BUDGETS.map(b => (
                  <button 
                    key={b} 
                    onClick={() => setData({...data, budget: b})}
                    role="radio"
                    aria-checked={data.budget === b}
                    className={`p-6 border text-left font-bold uppercase tracking-widest text-xs md:text-sm transition-all ${data.budget === b ? 'border-white bg-white text-black' : 'border-zinc-800 hover:border-zinc-500 text-zinc-400'}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <h2 className="text-3xl font-black uppercase tracking-tighter">When do you want to start?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="radiogroup" aria-label="Timeline Options">
                {TIMELINES.map(t => (
                  <button 
                    key={t} 
                    onClick={() => setData({...data, timeline: t})}
                    role="radio"
                    aria-checked={data.timeline === t}
                    className={`p-6 border text-left font-bold uppercase tracking-widest text-xs md:text-sm transition-all ${data.timeline === t ? 'border-white bg-white text-black' : 'border-zinc-800 hover:border-zinc-500 text-zinc-400'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 6 && !submitSuccess && (
            <motion.div key="step6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Ready to proceed.</h2>
                <div className="border border-white/20 p-8 md:p-12 bg-zinc-950 inline-block w-full max-w-lg">
                  <h3 className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4">Project Inquiry</h3>
                  <p className="text-white text-lg font-medium mb-8">We have all the details needed to review your project.</p>
                  
                  <MagneticElement className="w-full">
                    <button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? "SUBMITTING..." : "SUBMIT INQUIRY"}
                    </button>
                  </MagneticElement>
                </div>
              </div>
            </motion.div>
          )}

          {step === 6 && submitSuccess && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-12 flex flex-col items-center justify-center text-center">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">REQUEST RECEIVED.</h2>
              <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-tight mb-8">WE'VE GOT YOUR DETAILS.</p>
              
              <div className="border border-white/20 p-8 bg-zinc-950 w-full max-w-md mt-8">
                <h3 className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-6">NEXT STEP</h3>
                <p className="text-white text-base font-medium mb-6">Our automated booking system is currently coming online. We will review your inquiry and contact you directly to schedule the Discovery Call.</p>
                <a href="mailto:contactneklabs@gmail.com" className="font-bold underline hover:text-zinc-300 text-sm">contactneklabs@gmail.com</a>
              </div>
            </motion.div>
          )}
          
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {!submitSuccess && (
        <div className="flex justify-between items-center pt-16 border-t border-zinc-900 mt-16">
          {step > 1 ? (
            <button disabled={isSubmitting} onClick={prevStep} className="text-zinc-500 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors flex items-center gap-2 disabled:opacity-50">
              <ArrowLeft size={16} /> BACK
            </button>
          ) : <div />}
          
          {step < 6 && (
            <MagneticElement>
              <button onClick={nextStep} className="bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors">
                CONTINUE <ArrowRight size={16} />
              </button>
            </MagneticElement>
          )}
        </div>
      )}
    </div>
  );
}
