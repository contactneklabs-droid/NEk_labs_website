"use client";

import { motion } from "framer-motion";
import { whatAffectsPrice } from "@/lib/pricingData";

export default function WhatAffectsPrice() {
  return (
    <section id="what-affects-price" className="py-24 md:py-32 bg-black border-b border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black uppercase tracking-tighter sticky top-32"
            >
              WHAT AFFECTS <br className="hidden md:block" />
              <span className="text-zinc-500">THE FINAL PRICE?</span>
            </motion.h2>
          </div>

          <div className="md:col-span-7">
            <div className="flex flex-col gap-12">
              {whatAffectsPrice.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-4 border-b border-zinc-800 pb-12 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-zinc-500">{item.id}</span>
                    <span className="text-zinc-700">/</span>
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-lg leading-relaxed pl-12 md:pl-[4.5rem]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
