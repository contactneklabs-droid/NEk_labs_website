"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ScrambleText from "./ScrambleText";

export default function Hero() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeenCard = localStorage.getItem('hasSeenNekCard');
      if (!hasSeenCard && window.location.search.indexOf('card=true') === -1) {
        const timer = setTimeout(() => setShowHint(true), 2500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const openCard = () => {
    setShowHint(false);
    if (typeof window !== 'undefined') localStorage.setItem('hasSeenNekCard', 'true');
    window.dispatchEvent(new Event('open-nek-card'));
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl"
        >
          <motion.p variants={itemVariants} className="text-zinc-500 uppercase tracking-[0.2em] text-sm md:text-base font-semibold mb-8">
            <ScrambleText text="Experimental Technology Laboratory" />
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-7xl lg:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.9] mb-12">
            We Build <br />
            <span className="text-zinc-500">Digital Systems</span> <br />
            For The Next <br />
            Generation.
          </motion.h1>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 text-xs md:text-sm uppercase tracking-widest font-medium border-l-2 border-white/20 pl-6 py-2">
            <span className="border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors cursor-default">WEB</span>
            <span className="border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors cursor-default">AI</span>
            <span className="border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors cursor-default">AUTOMATION</span>
            <span className="border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors cursor-default">CREATIVE TECH</span>
          </motion.div>

          {/* Mobile CTA */}
          <motion.div variants={itemVariants} className="md:hidden mt-10 flex">
            <button
              onClick={openCard}
              className="text-xs font-bold uppercase tracking-widest text-zinc-400 border border-white/20 hover:bg-white hover:text-black px-6 py-3 rounded-full transition-colors flex items-center gap-2 active:scale-95 relative"
            >
              NEk CARD <ArrowUpRight size={14} />
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-3 py-1.5 rounded-full font-bold tracking-widest whitespace-nowrap flex items-center gap-2 pointer-events-none shadow-2xl z-50"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                    </span>
                    TAP TO VIEW
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-6 flex items-center gap-4 text-xs uppercase tracking-widest text-zinc-500"
      >
        <span>Scroll</span>
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
          <ArrowDown size={14} />
        </div>
      </motion.div>
    </section>
  );
}
