"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer className="px-2 md:px-4 pb-2 md:pb-4 pt-20 bg-black">
      <div className="bg-[#0f0f0f] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-white font-sans w-full max-w-[1600px] mx-auto flex flex-col justify-between min-h-[600px] border border-white/5">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-4">
            <h2 className="tracking-tight mb-6 flex items-baseline gap-2">
              <span className="text-[48px] font-bold leading-none tracking-tighter">NEk.</span>
              <span className="text-[36px] font-[cursive] italic font-normal text-zinc-300">Labs</span>
            </h2>
            <p className="text-zinc-400 text-[15px]">
              Digital systems for ambitious brands.
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
            {/* Links Col 1 */}
            <div>
              <ul className="space-y-4">
                <li><Link href="#work" className="text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">Work</Link></li>
                <li><Link href="#services" className="text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#about" className="text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="#pricing" className="text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Links Col 2 */}
            <div>
              <ul className="space-y-4">
                <li><a href="#" className="text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">X</a></li>
                <li><a href="https://www.instagram.com/nek_labs/" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/bharathchavan/" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">Linkedin</a></li>
              </ul>
            </div>

            {/* Links Col 3 */}
            <div className="col-span-2 md:col-span-1">
              <ul className="space-y-4">
                <li><Link href="/terms" className="text-[15px] font-medium text-zinc-500 hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
                <li><Link href="/privacy" className="text-[15px] font-medium text-zinc-500 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/cookie" className="text-[15px] font-medium text-zinc-500 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Back to top */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <button 
              onClick={scrollToTop}
              className="group flex items-center justify-between w-[170px] bg-[#1a1a1a] hover:bg-[#222] transition-colors rounded-full py-1.5 pl-6 pr-1.5 border border-white/5"
            >
              <span className="text-[15px] font-medium text-zinc-300">Back to top</span>
              <div className="bg-white text-black p-2.5 rounded-full group-hover:-translate-y-1 transition-transform">
                <ArrowUp size={18} strokeWidth={2.5} />
              </div>
            </button>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <h3 className="flex items-baseline gap-2 z-10 relative">
              <span className="text-[56px] font-bold leading-none tracking-tighter">NEk.</span>
              <span className="text-[42px] font-[cursive] italic font-normal text-zinc-300 leading-none">Labs</span>
            </h3>
            <p className="text-[32px] leading-none font-medium text-zinc-400 mb-8 -mt-1 z-0 relative">in your mailbox</p>
            
            <div className="relative w-full max-w-[420px] h-[56px]">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-[#1c1c1c] border border-white/10 rounded-full flex items-center justify-center gap-3 text-white"
                  >
                    <div className="bg-white text-black p-1.5 rounded-full">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-[15px] font-medium">You're on the list.</span>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 flex items-center"
                    onSubmit={handleSubscribe}
                  >
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com" 
                      disabled={status === "loading"}
                      className="w-full h-full bg-white text-black rounded-full pl-6 pr-16 outline-none placeholder:text-zinc-500 text-[15px] font-medium disabled:opacity-80"
                      required
                    />
                    <button 
                      type="submit"
                      disabled={status === "loading"}
                      className="absolute right-2 bg-[#0f0f0f] text-white p-2.5 rounded-full hover:bg-zinc-800 transition-colors disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <ArrowRight size={20} strokeWidth={2.5} />
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
              {status === "error" && (
                <p className="absolute -bottom-6 left-6 text-red-500 text-xs font-medium">Something went wrong. Try again.</p>
              )}
            </div>
          </div>

          {/* Copyright & Email */}
          <div className="lg:col-span-3 order-3 flex flex-col justify-end text-left lg:text-right">
            <a href="mailto:contactneklabs@gmail.com" className="text-[15px] font-medium mb-6 hover:text-zinc-300 transition-colors inline-block">
              contactneklabs@gmail.com
            </a>
            <div className="text-zinc-500 text-[13px] font-medium space-y-0.5">
              <p><span className="font-bold">NEk.</span> <span className="font-[cursive] italic font-normal">Labs</span></p>
              <p>{new Date().getFullYear()} © All rights reserved</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
