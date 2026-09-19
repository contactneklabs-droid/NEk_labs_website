"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const defaultFaqs = [
  { q: "What does NEk. Labs do?", a: "We are an experimental technology laboratory. We build high-performance web applications, integrate AI systems, and automate business workflows." },
  { q: "Who do you work with?", a: "We partner with forward-thinking brands, enterprise clients, and ambitious startups looking to engineer a competitive advantage through technology." },
  { q: "Do you build custom websites?", a: "Yes. We engineer bespoke digital platforms prioritizing performance, scale, and brutalist design aesthetics." },
  { q: "Do you build AI systems?", a: "Yes. We integrate customized LLMs and generative AI to create autonomous systems and enhanced user experiences." },
  { q: "Can you automate existing workflows?", a: "Absolutely. We map out manual business processes and replace them with robust, scalable data pipelines and integrations." },
  { q: "Do you build SaaS products?", a: "Yes, we architect and develop full-stack SaaS applications using modern frameworks like Next.js and specialized backend technologies." },
  { q: "How does a project start?", a: "Every project begins with our DISCOVER phase—a deep technical and strategic audit before any code is written." },
  { q: "How much does a project cost?", a: "Our engagements are highly customized. Project budgets vary based on complexity, scale, and the technical requirements of the build." },
];

interface FAQSectionProps {
  items?: { q: string; a: string }[];
}

export default function FAQSection({ items = defaultFaqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center">
          FAQ
        </h2>

        <div className="space-y-4">
          {items.map((faq, idx) => (
            <div key={idx} className="border border-zinc-800 bg-zinc-950">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900 transition-colors"
              >
                <span className="font-bold text-lg uppercase tracking-tight pr-4">{faq.q}</span>
                {openIndex === idx ? <Minus size={20} className="text-zinc-500 shrink-0" /> : <Plus size={20} className="text-zinc-500 shrink-0" />}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800 mt-4 mx-6 pb-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
