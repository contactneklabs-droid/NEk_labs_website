"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NekCard from "./NekCard";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Automatically open card if ?card=true is present in the URL
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('card') === 'true') {
        setTimeout(() => setCardOpen(true), 0);
      }
    }
  }, []);

  useEffect(() => {
    const handleOpenCard = () => {
      setCardOpen(true);
      setShowHint(false);
      if (typeof window !== 'undefined') localStorage.setItem('hasSeenNekCard', 'true');
    };
    window.addEventListener('open-nek-card', handleOpenCard);
    return () => window.removeEventListener('open-nek-card', handleOpenCard);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeenCard = localStorage.getItem('hasSeenNekCard');
      if (!hasSeenCard && window.location.search.indexOf('card=true') === -1) {
        const timer = setTimeout(() => setShowHint(true), 2500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEsc);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Framer motion variants for the mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const, staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 15 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
            : "bg-transparent border-transparent py-4 lg:py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex flex-col font-black tracking-tighter relative z-50 hover:opacity-70 transition-opacity"
          >
            <span className="text-xl text-white uppercase leading-[0.75]">NEK.</span>
            <span className="text-xl text-zinc-400 uppercase leading-[0.75] -mt-[0.05em]">LABS</span>
          </Link>

          {/* Desktop Nav (Unchanged) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium tracking-wide">
            <Link href="#work" className="hover:text-zinc-400 transition-colors">
              WORK
            </Link>
            <Link href="#services" className="hover:text-zinc-400 transition-colors">
              SERVICES
            </Link>
            <Link href="/studio" className="hover:text-zinc-400 transition-colors">
              STUDIO
            </Link>
            <Link href="#contact" className="hover:text-zinc-400 transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Desktop CTA (Unchanged) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button
              onClick={() => {
                setCardOpen(true);
                setShowHint(false);
                if (typeof window !== 'undefined') localStorage.setItem('hasSeenNekCard', 'true');
              }}
              className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-zinc-400 hover:bg-white hover:text-black px-2 lg:px-3 py-1.5 lg:py-2 transition-none flex items-center gap-1 whitespace-nowrap active:scale-95 relative"
            >
              NEk CARD <ArrowUpRight size={14} />
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] px-3 py-1.5 rounded-full font-bold tracking-widest whitespace-nowrap flex items-center gap-2 pointer-events-none shadow-2xl z-50"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                    </span>
                    TAP TO VIEW
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-white"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <Link
              href="/meet"
              className="flex items-center gap-1 lg:gap-2 border border-white/20 px-3 lg:px-4 py-2 text-[10px] lg:text-sm uppercase font-medium hover:bg-white hover:text-black transition-none active:scale-95 whitespace-nowrap"
            >
              BOOK YOUR MEET <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle (Redesigned Editorial Index) */}
          <button
            className="md:hidden relative z-50 flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:opacity-70 transition-opacity"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="Open Menu"
          >
            <span>INDEX</span>
            <span className="text-zinc-500 font-mono">01</span>
          </button>
        </div>
      </header>

      {/* Redesigned Mobile Menu (Option A + D) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-black z-50 flex flex-col md:hidden overflow-y-auto"
            aria-label="Mobile Navigation"
            role="dialog"
            aria-modal="true"
          >
            {/* Mobile Menu Header */}
            <div className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
              <span className="text-xl font-bold tracking-tighter uppercase">NEk LABS</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold tracking-widest uppercase hover:text-zinc-400 transition-colors"
                aria-label="Close Menu"
              >
                CLOSE ×
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 flex flex-col justify-between p-6">
              
              <div className="flex flex-col">
                <motion.div variants={itemVariants} className="border-b border-white/10 pb-2 mb-8">
                  <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                    INDEX
                  </span>
                </motion.div>
                
                <div className="flex flex-col gap-6">
                  <motion.div variants={itemVariants}>
                    <Link href="#work" onClick={() => setIsOpen(false)} className="group flex items-center gap-4 text-4xl font-black uppercase tracking-tighter">
                      <span className="text-sm font-mono text-zinc-500">01</span>
                      <span className="group-hover:text-zinc-400 transition-colors flex-1">WORK</span>
                      <ArrowUpRight size={24} className="text-zinc-500 group-hover:text-white transition-colors" />
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link href="#services" onClick={() => setIsOpen(false)} className="group flex items-center gap-4 text-4xl font-black uppercase tracking-tighter">
                      <span className="text-sm font-mono text-zinc-500">02</span>
                      <span className="group-hover:text-zinc-400 transition-colors flex-1">SERVICES</span>
                      <ArrowUpRight size={24} className="text-zinc-500 group-hover:text-white transition-colors" />
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link href="/studio" onClick={() => setIsOpen(false)} className="group flex items-center gap-4 text-4xl font-black uppercase tracking-tighter">
                      <span className="text-sm font-mono text-zinc-500">03</span>
                      <span className="group-hover:text-zinc-400 transition-colors flex-1">STUDIO</span>
                      <ArrowUpRight size={24} className="text-zinc-500 group-hover:text-white transition-colors" />
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link href="#contact" onClick={() => setIsOpen(false)} className="group flex items-center gap-4 text-4xl font-black uppercase tracking-tighter border-b border-white/10 pb-8">
                      <span className="text-sm font-mono text-zinc-500">04</span>
                      <span className="group-hover:text-zinc-400 transition-colors flex-1">CONTACT</span>
                      <ArrowUpRight size={24} className="text-zinc-500 group-hover:text-white transition-colors" />
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* CTAs & Footer */}
              <div className="flex flex-col gap-6 mt-12 shrink-0">
                
                <motion.div variants={itemVariants}>
                  <Link
                    href="/meet"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex justify-center items-center gap-2 border border-white p-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors active:scale-95"
                  >
                    BOOK YOUR MEET <ArrowUpRight size={16} />
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 flex flex-col gap-1">
                  <span className="text-xs font-bold tracking-widest uppercase">NEk LABS</span>
                  <span className="text-[10px] text-zinc-500 tracking-widest uppercase font-mono">WEB • AI • AUTOMATION</span>
                </motion.div>
              </div>

            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <NekCard isOpen={cardOpen} onClose={() => setCardOpen(false)} />
    </>
  );
}
