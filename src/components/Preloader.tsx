"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Stop scrolling while preloader is active
    document.body.style.overflow = "hidden";
    
    const unlockScroll = () => { document.body.style.overflow = "auto"; };

    // Minimal subtle loading simulation
    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.floor((currentStep / steps) * 100);
      
      if (currentStep >= steps) {
        setProgress(100);
        clearInterval(timer);
        
        // Wait briefly after hitting 100 before smoothly fading out
        setTimeout(() => {
          setLoading(false);
          unlockScroll();
        }, 600);
      } else {
        setProgress(newProgress);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      unlockScroll();
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center text-white overflow-hidden"
        >
          {/* Main Kinetic Text Fill */}
          <div className="relative font-black tracking-tighter text-6xl md:text-8xl lg:text-[10rem] uppercase leading-none select-none flex items-center justify-center">
            
            {/* Background Layer (Faint Dark Gray) */}
            <div className="text-zinc-900 flex whitespace-nowrap">
              <span>NEK.</span>
              <span className="ml-2 md:ml-4">LABS</span>
            </div>
            
            {/* Foreground Fill Layer (Pure White) */}
            <div 
              className="absolute top-0 left-0 h-full flex whitespace-nowrap overflow-hidden transition-all duration-75 ease-out text-white"
              style={{ width: `${progress}%` }}
            >
              <span>NEK.</span>
              <span className="ml-2 md:ml-4">LABS</span>
            </div>

          </div>

          {/* Tiny Mono Progress */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="text-[10px] font-mono tracking-[0.4em] text-zinc-600 uppercase">
              INITIALIZING
            </div>
            <div className="text-sm font-mono tracking-widest text-zinc-400">
              {progress < 10 ? `0${progress}` : progress}%
            </div>
          </motion.div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
