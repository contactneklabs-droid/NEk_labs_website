"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-32 bg-black border-b border-zinc-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-8">
            NEk LABS / PRICING
          </p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
            BUILT AROUND <br />
            <span className="text-zinc-500">WHAT YOU NEED.</span>
          </h1>
          
          <div className="max-w-xl">
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
              Clear starting points for digital work. <br />
              Custom scope when the system demands it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
