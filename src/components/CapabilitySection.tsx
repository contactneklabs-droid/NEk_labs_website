"use client";

import { motion } from "framer-motion";

const capabilities = [
  "WEB",
  "AI",
  "AUTOMATION",
  "CREATIVE TECHNOLOGY",
  "DIGITAL PRODUCTS"
];

export default function CapabilitySection() {
  return (
    <section id="services" className="py-32 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Core Capabilities</h2>
      </div>
      
      <div className="w-full flex flex-col border-y border-zinc-800">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={cap}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
            className={`border-b border-zinc-800 py-10 md:py-16 px-6 md:px-12 hover:bg-white hover:text-black transition-colors duration-500 cursor-default group ${idx === capabilities.length - 1 ? 'border-b-0' : ''}`}
          >
            <h3 className="text-[clamp(1.5rem,8vw,2.25rem)] md:text-6xl lg:text-8xl font-black uppercase tracking-tighter w-full text-zinc-700 group-hover:text-black transition-colors duration-500 flex justify-between items-center">
              <span>{cap}</span>
              <span className="text-xl md:text-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-10 group-hover:translate-x-0">↗</span>
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
