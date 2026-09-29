"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, Download, Terminal, Wifi } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import QRCode from "react-qr-code";

interface NekCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NekCard({ isOpen, onClose }: NekCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const downloadVCF = () => {
    const vcfText = `BEGIN:VCARD\nVERSION:3.0\nN:Chavan;Bharath;;;\nFN:Bharath Chavan\nORG:NEk LABS\nTITLE:Founder, Builder, Creator\nEMAIL:contactneklabs@gmail.com\nURL:${window.location.origin}\nEND:VCARD`;
    const blob = new Blob([vcfText], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Bharath_Chavan_NEk_LABS.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsFlipped(false);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 perspective-[1200px]" aria-modal="true" role="dialog">
          {/* Subtle Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* 3D Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[360px] h-[580px] group"
          >
            {/* 3D Flipper */}
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 70, damping: 20 }}
              className="w-full h-full relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              
              {/* ===================== FRONT FACE (STEALTH ID) ===================== */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#0a0a0a] border border-[#222] rounded-2xl overflow-hidden flex flex-col shadow-[0_30px_60px_-15px_rgba(0,0,0,1)]"
                style={{ backfaceVisibility: "hidden" }}
              >
                
                {/* ID Header (Terminal Vibe) */}
                <div className="h-12 border-b border-[#222] flex items-center justify-between px-4 bg-[#0f0f0f] relative overflow-hidden">
                  {/* Scanline overlay effect */}
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                  
                  <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-zinc-500" />
                    <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">ID: NEK-001</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">SYS: ONLINE</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  </div>
                </div>

                {/* Flip & Close Buttons (Floating over image) */}
                <div className="absolute top-[60px] right-4 flex flex-col gap-2 z-20">
                  <button onClick={() => setIsFlipped(true)} className="w-8 h-8 bg-black/60 backdrop-blur-md border border-[#333] rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors" aria-label="Flip Card">
                    <RotateCcw size={14} />
                  </button>
                  <button onClick={onClose} className="w-8 h-8 bg-black/60 backdrop-blur-md border border-[#333] rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors" aria-label="Close">
                    <X size={14} />
                  </button>
                </div>

                {/* Profile Image (Grayscale/Metal look) */}
                <div className="relative w-full h-[240px] bg-zinc-900 border-b border-[#222]">
                  <Image
                    src="https://res.cloudinary.com/wak9cipn/image/upload/f_auto,q_auto/v1789490948/IMG_9303-3.jpg"
                    alt="Bharath Chavan"
                    fill
                    sizes="360px"
                    priority
                    className="object-cover grayscale contrast-125 brightness-90"
                    draggable={false}
                  />
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 shadow-[inset_0_-20px_40px_rgba(10,10,10,1)] pointer-events-none"></div>
                </div>

                {/* Data Readout Section */}
                <div className="flex-1 p-6 flex flex-col">
                  
                  {/* Large Typography Name */}
                  <h2 className="text-2xl font-black text-white tracking-tighter uppercase mb-1">
                    Bharath Chavan
                  </h2>
                  <p className="font-mono text-[11px] text-blue-500 tracking-widest mb-6 uppercase">
                    @nek_labs
                  </p>

                  {/* Terminal Key-Value Pairs */}
                  <div className="flex flex-col gap-3 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    <div className="flex items-start border-b border-[#222] pb-2">
                      <span className="w-20 flex-shrink-0">[ROLE]</span>
                      <span className="text-zinc-200">Founder · Builder</span>
                    </div>
                    <div className="flex items-start border-b border-[#222] pb-2">
                      <span className="w-20 flex-shrink-0">[CLASS]</span>
                      <span className="text-zinc-200">Creative Technologist</span>
                    </div>
                    <div className="flex items-start border-b border-[#222] pb-2">
                      <span className="w-20 flex-shrink-0">[SYSTEM]</span>
                      <span className="text-zinc-400 leading-relaxed normal-case tracking-normal">
                        Engineering digital systems where the web is a playground for automation and high-end aesthetics.
                      </span>
                    </div>
                  </div>

                  <div className="flex-1"></div>

                  {/* Footer Actions & Barcode */}
                  <div className="flex items-end justify-between mt-6">
                    {/* Fake Barcode / Serial */}
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-[2px] h-6 opacity-40">
                        {/* CSS generated barcode effect */}
                        {[...Array(20)].map((_, i) => (
                          <div key={i} className="bg-white h-full" style={{ width: Math.random() > 0.5 ? '2px' : '4px', opacity: Math.random() > 0.3 ? 1 : 0 }}></div>
                        ))}
                      </div>
                      <span className="font-mono text-[8px] text-zinc-600 tracking-[0.2em]">AUTH-B-8942</span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <a
                        href="https://wa.me/?text=Check%20out%20NEk%20LABS%3A%20https%3A%2F%2Fneklabs.vercel.app%2Fbharath"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded border border-[#333] bg-[#111] flex items-center justify-center text-zinc-400 hover:text-[#25D366] hover:border-[#25D366] transition-colors"
                        title="Share via WhatsApp"
                      >
                        <Wifi size={14} />
                      </a>
                      <Link
                        href="/meet"
                        onClick={onClose}
                        className="h-10 px-4 rounded border border-white bg-white flex items-center justify-center text-black font-bold text-[11px] tracking-widest uppercase hover:bg-zinc-200 transition-colors"
                      >
                        Connect
                      </Link>
                    </div>
                  </div>

                </div>
              </div>

              {/* ===================== BACK FACE (DARK QR) ===================== */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#0a0a0a] border border-[#222] rounded-2xl overflow-hidden flex flex-col p-8 items-center justify-center shadow-2xl"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <button onClick={() => setIsFlipped(false)} className="absolute top-6 right-6 z-20 w-8 h-8 bg-[#111] border border-[#333] rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <RotateCcw size={14} />
                </button>

                <Terminal size={24} className="text-zinc-600 mb-4" />
                <h3 className="font-mono text-white text-sm tracking-widest uppercase mb-2">Encrypted Portal</h3>
                <p className="font-mono text-[10px] text-zinc-500 mb-10 text-center tracking-widest uppercase max-w-[200px] leading-relaxed">
                  Scan to transmit digital signature to your device
                </p>
                
                {/* Dark stylized QR Code Container */}
                <div className="bg-[#111] border border-[#333] p-5 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.03)] mb-10 h-[190px] w-[190px] flex items-center justify-center relative">
                  {/* Subtle corner brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-zinc-600 rounded-tl-xl"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-zinc-600 rounded-tr-xl"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-zinc-600 rounded-bl-xl"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-zinc-600 rounded-br-xl"></div>
                  
                  {mounted && <QRCode value={window.location.origin} size={150} level="H" bgColor="#111111" fgColor="#ffffff" />}
                </div>

                <button
                  onClick={downloadVCF}
                  className="w-full h-12 rounded border border-[#333] bg-[#111] text-white font-mono text-[11px] tracking-widest uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3"
                >
                  <Download size={14} /> Download VCF
                </button>
              </div>

            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
