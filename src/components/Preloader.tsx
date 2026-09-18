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
    const duration = 1800;
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
        }, 500);
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
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-white"
        >
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Small, elegant logo */}
            <div className="flex items-center gap-2 font-black tracking-tighter">
              <span className="text-4xl md:text-5xl text-white uppercase leading-none">NEK.</span>
              <span className="text-4xl md:text-5xl text-zinc-500 uppercase leading-none">LABS</span>
            </div>

            {/* Subtle Minimalist Loading Bar */}
            <div className="w-48 md:w-64 h-[2px] bg-white/10 relative overflow-hidden mt-2">
              <div 
                className="absolute top-0 left-0 h-full bg-white transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Tiny Mono Progress */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-[0.3em] text-zinc-600 uppercase">
              INITIALIZING {progress < 10 ? `0${progress}` : progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
