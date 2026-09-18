"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="w-full py-24 bg-zinc-950 text-white selection:bg-white selection:text-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Header Column */}
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-zinc-500 mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-zinc-500"></span> 
              Core Ethos
            </h2>
          </div>

          {/* Content Column */}
          <div className="md:col-span-8 flex flex-col gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                Not Just Development. <br />
                <span className="font-playfair italic font-normal text-zinc-400 lowercase">Architecture.</span>
              </h3>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                We believe that the best digital products are not merely built; they are meticulously engineered. Our approach bridges the gap between raw algorithmic performance and striking visual aesthetics. We do not use templates. We do not cut corners. We build systems designed to scale, perform, and endure.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6 mt-12">
                Aesthetic <br />
                <span className="font-playfair italic font-normal text-zinc-400 lowercase">Precision.</span>
              </h3>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                Functionality without form is unfinished. We obsess over the micro-interactions, the typography, and the spatial relationships within our interfaces. By controlling every pixel, we ensure that the brands we work with project authority, modernity, and trust.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
