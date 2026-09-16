"use client";

import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    let iterations = 0;
    
    const interval = setInterval(() => {
      setGlitchText((prev) => 
        prev.split("")
          .map((letter, index) => {
            if (index < iterations) {
              return "404"[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iterations >= 3) {
        clearInterval(interval);
      }
      
      iterations += 1 / 5;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden z-10 px-6">
      {/* Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-20 opacity-20" />
      
      <div className="text-center relative z-30 max-w-lg">
        <div className="flex justify-center mb-8 text-white/50 animate-pulse">
          <Terminal size={48} strokeWidth={1} />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 font-mono select-none">
          {glitchText}
        </h1>
        
        <div className="h-px w-24 bg-white/20 mx-auto mb-8" />
        
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-zinc-400 mb-4">
          System Offline
        </h2>
        
        <p className="text-zinc-500 text-sm md:text-base mb-12 uppercase tracking-widest leading-relaxed">
          Critical error: The requested trajectory coordinates do not exist in the current spatial index.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Reboot Sequence
        </Link>
      </div>
    </main>
  );
}
