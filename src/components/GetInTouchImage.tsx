"use client";

import { motion } from "framer-motion";

export default function GetInTouchImage() {
  return (
    <section className="w-full relative bg-black border-t border-zinc-900 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full py-12 md:py-24 flex justify-center items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-6 relative aspect-[16/9] md:aspect-[2.35/1]">
          {/* eslint-disable-next-line @next/next/no-img-element */} <img
            src="/get-in-touch.jpg"
            alt="Get in touch visual"
            className="absolute inset-0 w-full h-full object-contain object-center"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}
