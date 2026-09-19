"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CustomProject() {
  return (
    <section className="py-24 md:py-32 bg-black border-b border-zinc-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-zinc-800 bg-zinc-950 p-12 md:p-20 text-center flex flex-col items-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            NOT EVERYTHING <br />
            <span className="text-zinc-500">FITS A PACKAGE.</span>
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl font-medium">
            If you&apos;re building something specific, tell us what it needs to do. 
            We architect and engineer bespoke digital platforms from the ground up.
          </p>

          <Link
            href="/meet"
            className="group flex items-center justify-between w-[260px] bg-white text-black hover:bg-zinc-200 transition-colors py-4 px-6 text-sm font-bold uppercase tracking-widest"
          >
            <span>BOOK YOUR MEET</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
