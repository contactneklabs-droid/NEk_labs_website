"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  "INIT_NEk_SYSTEM...",
  "ALLOCATING_MEMORY...",
  "MOUNTING_UI_COMPONENTS...",
  "ESTABLISHING_SECURE_CONNECTION...",
  "SYS_OK"
];

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Stop scrolling while preloader is active
    document.body.style.overflow = "hidden";
    
    // Fallback to unlock scrolling in case component unmounts unexpectedly
    const unlockScroll = () => { document.body.style.overflow = "auto"; };

    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < bootSequence.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 300);

    const timeout = setTimeout(() => {
      setLoading(false);
      unlockScroll();
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      unlockScroll();
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col justify-end p-8 font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-widest"
        >
          <div className="flex flex-col gap-2">
            {bootSequence.slice(0, textIndex + 1).map((line, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className={i === bootSequence.length - 1 ? "text-white font-bold" : ""}
              >
                &gt; {line}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
