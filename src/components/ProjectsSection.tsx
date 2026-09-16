"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NEk Forge",
    category: "Automation / Digital Systems",
    year: "2026",
    desc: "Automation-focused system providing website auditing, automated digital analysis, and automation workflows.",
    tech: ["AI", "Automation", "System Auditing"],
    isExperimental: true,
    status: "IN DEVELOPMENT",
    image: "/nek-forge.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Selected Work
          </h2>
          <p className="text-zinc-500 uppercase tracking-widest text-sm font-medium">
            Engineering & Design
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col group"
            >
              {/* Image - Strictly Monochrome */}
              <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-900 border border-zinc-800 mb-8 relative overflow-hidden group/image">
                <img src={proj.image} alt={proj.title} className="absolute inset-0 w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover/image:scale-105" />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply transition-opacity duration-700 group-hover/image:opacity-0" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-zinc-300 transition-colors">
                      {proj.title}
                    </h3>
                    {proj.isExperimental && (
                      <span className="border border-zinc-700 text-zinc-400 text-[10px] px-2 py-1 uppercase tracking-widest whitespace-nowrap">
                        NEk. Labs Experimental
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-8">
                    {proj.desc}
                  </p>
                  
                  <button className="flex items-center gap-2 border border-white/20 px-6 py-3 text-sm uppercase font-medium hover:bg-white hover:text-black transition-colors">
                    VIEW CASE STUDY <ArrowUpRight size={16} />
                  </button>
                </div>

                <div className="space-y-8 border-l border-zinc-800 pl-6">
                  <div>
                    <h4 className="text-xs text-zinc-600 uppercase tracking-widest mb-2 font-bold">Category</h4>
                    <p className="text-sm font-medium">{proj.category}</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-zinc-600 uppercase tracking-widest mb-2 font-bold">Year</h4>
                    <p className="text-sm font-medium">{proj.year}</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-zinc-600 uppercase tracking-widest mb-2 font-bold">Technologies</h4>
                    <ul className="flex flex-wrap gap-2">
                      {proj.tech.map((t) => (
                        <li key={t} className="text-xs text-zinc-400 bg-zinc-900 px-2 py-1 border border-zinc-800">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
