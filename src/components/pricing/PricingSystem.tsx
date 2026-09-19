"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { pricingSystem } from "@/lib/pricingData";

export default function PricingSystem() {
  return (
    <section className="py-24 md:py-32 bg-black border-b border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingSystem.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group border border-zinc-800 bg-zinc-950 hover:bg-white hover:text-black transition-colors duration-500 flex flex-col min-h-[500px]"
            >
              {/* Header */}
              <div className="p-8 md:p-10 border-b border-zinc-800 group-hover:border-zinc-200 transition-colors duration-500">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-xl font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">{plan.id}</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 group-hover:text-zinc-500 transition-colors">
                    {plan.name === "DIGITAL SYSTEMS" ? "CUSTOM" : "STARTING FROM"}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                  {plan.name}
                </h3>
                <div className="text-xl font-bold tracking-tight text-zinc-300 group-hover:text-zinc-800 transition-colors">
                  {plan.price}
                </div>
                {plan.positioning && (
                  <p className="mt-4 text-sm text-zinc-500 group-hover:text-zinc-600 transition-colors">
                    {plan.positioning}
                  </p>
                )}
              </div>

              {/* Scope */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 mb-6">
                  Possible Scope
                </p>
                <ul className="space-y-4 mb-12 flex-1">
                  {plan.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-white group-hover:bg-black rounded-full mt-2 shrink-0 transition-colors" />
                      <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-700 transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href={plan.ctaLink}
                className="p-8 md:p-10 border-t border-zinc-800 group-hover:border-zinc-200 flex items-center justify-between hover:bg-zinc-100 transition-colors mt-auto group/btn"
              >
                <span className="text-sm font-bold tracking-widest uppercase">{plan.ctaText}</span>
                <ArrowUpRight size={20} className="text-zinc-500 group-hover/btn:text-black transition-colors group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-600 font-medium">
            Final pricing depends on project scope, complexity, integrations and requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
