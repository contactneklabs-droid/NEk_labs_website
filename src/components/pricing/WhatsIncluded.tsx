"use client";

import { motion } from "framer-motion";
import { whatsIncluded } from "@/lib/pricingData";

export default function WhatsIncluded() {
  return (
    <section className="py-24 md:py-32 bg-black border-b border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black uppercase tracking-tighter sticky top-32"
            >
              WHAT&apos;S <br className="hidden md:block" />
              <span className="text-zinc-500">INCLUDED</span>
            </motion.h2>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-4">
              {whatsIncluded.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group flex items-start gap-8 p-8 border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-colors"
                >
                  <span className="text-2xl md:text-3xl font-mono text-zinc-700 group-hover:text-white transition-colors">
                    {item.id}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight pt-1 group-hover:text-white text-zinc-300 transition-colors">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
