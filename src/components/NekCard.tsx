"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BadgeCheck, Share2, Download, RotateCcw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import QRCode from "react-qr-code";

interface NekCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NekCard({ isOpen, onClose }: NekCardProps) {
  const [copied, setCopied] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleShare = async () => {
    const url = `${window.location.origin}?card=true`;
    const shareData = {
      title: "NEk LABS",
      text: "NEk — FOUNDER · BUILDER · CREATOR",
      url: url
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        navigator.clipboard.writeText(url).catch(() => { });
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } else {
      navigator.clipboard.writeText(url).catch(() => { });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
      setIsFlipped(false); // Reset flip state when opened
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 perspective-[1000px]" aria-modal="true" role="dialog">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* 3D Container */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[360px] h-[580px] rounded-2xl group"
          >
            {/* 3D Flipper */}
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 20 }}
              className="w-full h-full relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              
              {/* ===================== FRONT FACE ===================== */}
              <div 
                className="absolute inset-0 w-full h-full bg-black/40 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.05)] ring-1 ring-white/5"
                style={{ backfaceVisibility: "hidden" }}
              >
                {/* Flip Button */}
                <button onClick={() => setIsFlipped(true)} className="absolute top-4 left-4 z-20 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors" aria-label="Flip Card">
                  <RotateCcw size={16} />
                </button>

                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  <X size={16} />
                </button>

                {/* Cover Image Area */}
                <div className="h-[220px] bg-black relative w-full flex items-center justify-center border-b border-white/5">
                  <div className="relative h-28 w-56 flex items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/wak9cipn/image/upload/f_auto,q_auto/v1789490961/ChatGPT_Image_Aug_14_2026_11_09_51_PM.png"
                      alt="NEk LABS"
                      fill
                      sizes="150px"
                      priority
                      className="object-contain select-none pointer-events-none scale-125 opacity-90"
                      draggable={false}
                    />
                  </div>

                  {/* Social Icons */}
                  <div className="absolute bottom-4 right-6 flex items-center gap-4 text-white/50">
                    <a href="https://www.instagram.com/nek_labs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                    <a href="https://wa.me/917411671684?text=Hey%20NEk%20LABS!%20I'm%20interested%20in%20working%20with%20you%20to%20level%20up%20my%20digital%20systems." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contactneklabs@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </a>
                  </div>
                </div>

                {/* Profile Picture */}
                <div className="absolute top-[170px] left-6 w-24 h-24 bg-black border-[2px] border-white/20 rounded-full flex items-center justify-center overflow-hidden z-10 shadow-2xl">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://res.cloudinary.com/wak9cipn/image/upload/f_auto,q_auto/v1789490948/IMG_9303-3.jpg"
                      alt="Profile Picture"
                      fill
                      sizes="96px"
                      priority
                      className="object-cover select-none pointer-events-none"
                      draggable={false}
                    />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="flex-1 p-6 pt-4 flex flex-col justify-between">
                  {/* Action Buttons */}
                  <div className="flex justify-end items-center gap-3">
                    <button
                      onClick={handleShare}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white/10 hover:text-white transition-all relative group"
                    >
                      <AnimatePresence>
                        {copied && (
                          <motion.span
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            className="text-[10px] font-bold absolute -top-8 bg-white text-black px-2.5 py-1 rounded-md tracking-wider pointer-events-none"
                          >
                            COPIED!
                          </motion.span>
                        )}
                      </AnimatePresence>
                      <Share2 size={16} />
                    </button>
                    <Link
                      href="/meet"
                      onClick={onClose}
                      className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors"
                    >
                      Book A Meet
                    </Link>
                  </div>

                  {/* Name & Handle */}
                  <div className="mt-4">
                    <div className="flex items-center gap-1.5">
                      <h2 className="text-xl font-bold text-white tracking-tight leading-none">NEk. | Bharath chavan</h2>
                      <BadgeCheck size={18} fill="#3b82f6" stroke="white" strokeWidth={1.5} className="mt-0.5" />
                    </div>
                    <p className="text-zinc-400 font-medium text-sm mt-1">@nek_labs</p>
                  </div>

                  {/* Bio */}
                  <p className="text-zinc-400 text-[13px] leading-relaxed mt-4">
                    NEk LABS is a digital studio where technology levels up like an overpowered anime protagonist and the web is just another playground for automation and high-end aesthetics.
                  </p>

                  {/* Titles */}
                  <div className="flex items-center mt-6">
                    <span className="font-black text-white text-[13px] tracking-widest uppercase">FOUNDER · BUILDER · CREATOR</span>
                  </div>
                </div>
              </div>

              {/* ===================== BACK FACE ===================== */}
              <div 
                className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden flex flex-col p-6 items-center justify-center shadow-2xl ring-1 ring-white/5"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <button onClick={() => setIsFlipped(false)} className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors">
                  <RotateCcw size={16} />
                </button>

                <h3 className="text-white font-bold text-xl mb-2 tracking-tight">Scan to Connect</h3>
                <p className="text-zinc-400 text-sm mb-8 text-center px-4">Point your camera at the QR code to open the NEk LABS portal.</p>
                
                <div className="bg-white p-4 rounded-xl shadow-lg mb-8">
                  {typeof window !== 'undefined' && (
                    <QRCode value={window.location.origin} size={150} level="H" />
                  )}
                </div>

                <button
                  onClick={downloadVCF}
                  className="bg-white text-black w-full py-3.5 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={16} /> Save to Contacts
                </button>
              </div>

            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
