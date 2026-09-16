"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    id: "01",
    title: "Web",
    desc: "High-performance web architecture engineered to scale, convert, and dominate digital landscapes.",
  },
  {
    id: "02",
    title: "AI",
    desc: "Customized LLMs and generative artificial intelligence integrated to create autonomous systems.",
  },
  {
    id: "03",
    title: "Automation",
    desc: "Business process automation workflows that eliminate repetitive tasks and streamline operations.",
  },
  {
    id: "04",
    title: "Digital Systems",
    desc: "End-to-end digital experiences and experimental technology built for ambitious brands and ideas.",
  },
];

export default function MetricsSection() {
  return (
    <section className="py-32 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="border-t border-zinc-800 pt-8"
            >
              <div className="text-zinc-600 font-mono text-sm tracking-widest mb-6">
                {metric.id}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tighter mb-4 text-white">
                {metric.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
