"use client";

import { motion } from "framer-motion";

const systems = [
  {
    id: "01",
    title: "BUILD",
    desc: "Architecting high-performance digital infrastructure. From scalable web applications to robust backend systems.",
    caps: ["Next.js & React", "Headless CMS", "Custom E-Commerce", "API Development"],
  },
  {
    id: "02",
    title: "AUTOMATE",
    desc: "Eliminating manual workflows with intelligent system integrations and autonomous processes.",
    caps: ["Workflow Automation", "Data Pipelines", "CRM Integration", "System Sync"],
  },
  {
    id: "03",
    title: "AMPLIFY",
    desc: "Leveraging applied AI and creative technology to scale your digital capabilities exponentially.",
    caps: ["LLM Integration", "Generative AI", "Creative Tech", "Interactive WebGL"],
  },
];

export default function SystemSection() {
  return (
    <section id="system" className="py-32 bg-black text-white relative border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-20 text-center">
          The NEk. System
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {systems.map((sys, idx) => (
            <motion.div
              key={sys.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group border border-zinc-800 bg-zinc-950 p-10 hover:bg-white hover:text-black transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-10 right-10 text-5xl font-black opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                {sys.id}
              </div>
              
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 relative z-10">{sys.title}</h3>
              <p className="text-zinc-400 group-hover:text-zinc-600 transition-colors duration-500 mb-12 relative z-10 leading-relaxed text-balance">
                {sys.desc}
              </p>
              
              <div className="space-y-3 relative z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 mb-4">Capabilities</p>
                {sys.caps.map((cap) => (
                  <div key={cap} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-white group-hover:bg-black rounded-full" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
