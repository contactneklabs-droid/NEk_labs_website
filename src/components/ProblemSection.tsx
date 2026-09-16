"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="problem" className="py-32 bg-zinc-950 border-t border-white/10" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-12 text-zinc-500">
            Your digital presence <br />
            <span className="text-white">shouldn&apos;t just exist.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="h-px w-full bg-zinc-800" />
              <h3 className="text-xl font-bold uppercase tracking-widest text-zinc-400">The Problem</h3>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Most agencies build generic websites and disconnected tools. The result is a fragmented ecosystem with manual workflows, ineffective AI implementation, and technology built without strategy.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="h-px w-full bg-white/20" />
              <h3 className="text-xl font-bold uppercase tracking-widest text-white">The NEk. Approach</h3>
              <p className="text-zinc-300 text-lg leading-relaxed">
                We engineer cohesive systems. High-performance web architecture, deeply integrated automation, and applied AI—designed to scale, convert, and dominate.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
