"use client";

import { motion } from "framer-motion";

export default function StudioHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-end pb-20 px-6 bg-black text-white pt-32">
      {/* Background Noise overlay for texture */}
      <div className="absolute inset-0 z-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto z-10 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex flex-col gap-2"
        >
          <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs">
            ABOUT THE LAB
          </span>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.85] w-full max-w-5xl">
            WE ENGINEER <br />
            <span className="text-zinc-500">DIGITAL</span> REALITIES
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 ml-auto mt-12 md:mt-0 border-t border-white/20 pt-6"
        >
          <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
            NEk LABS is an experimental technology laboratory operating at the absolute edge of performance, engineering, and design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
