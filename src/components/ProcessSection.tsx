"use client";

import { motion } from "framer-motion";

const process = [
  { id: "01", title: "DISCOVER", desc: "Audit, analyze, and strategize. We define the technical architecture and business objectives before writing a single line of code." },
  { id: "02", title: "DESIGN", desc: "Monochrome, brutalist, and highly functional. We design interfaces that prioritize user experience and brand authority." },
  { id: "03", title: "BUILD", desc: "Engineering the system using modern frameworks. Scalable, performant, and secure by default." },
  { id: "04", title: "EVOLVE", desc: "Continuous optimization, automation scaling, and AI integration to maintain an unfair digital advantage." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-20">
          The Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {process.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative border-l border-zinc-800 pl-6 pb-12"
            >
              <div className="text-zinc-600 text-sm font-bold tracking-widest mb-6">{step.id}</div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
