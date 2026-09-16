"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
              {/* Image - Strictly Monochrome (CSS-based for infinite quality & zero load time) */}
              <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-black border border-white/10 mb-8 relative overflow-hidden group/image flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
                <h3 className="text-[clamp(3rem,8vw,8rem)] font-black uppercase tracking-tighter text-white z-10 scale-95 group-hover/image:scale-100 transition-transform duration-700 mix-blend-difference">
                  {proj.title}
                </h3>
                <p className="text-zinc-500 font-mono text-xs md:text-sm mt-2 z-10 tracking-widest uppercase">
                  {proj.category}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-zinc-300 transition-colors">
                      {proj.title}
                    </h3>
                    {proj.isExperimental && (
                      <span className="border border-zinc-700 text-zinc-400 text-[10px] px-2 py-1 uppercase tracking-widest whitespace-nowrap">
                        NEk. Labs Prototype
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-8">
                    {proj.desc}
                  </p>
                  
                  <Link href="/work/nek-forge" className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm uppercase font-medium hover:bg-white hover:text-black transition-colors w-fit">
                    VIEW CASE STUDY <ArrowUpRight size={16} />
                  </Link>
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
