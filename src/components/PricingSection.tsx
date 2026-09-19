"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    id: "01",
    name: "Web Architecture",
    price: "From $3,500",
    description: "High-performance digital foundations and headless web applications.",
    features: [
      "Custom Next.js / React Development",
      "Headless CMS Integration",
      "Advanced SEO Optimization",
      "Premium Motion Design",
      "1 Month Post-Launch Support",
    ],
    popular: false,
  },
  {
    id: "02",
    name: "Automation Engine",
    price: "From $6,000",
    description: "Autonomous workflows and intelligent system integrations.",
    features: [
      "Everything in Web Architecture",
      "Custom Data Pipelines",
      "CRM & API Integrations",
      "Workflow Automation (Make/Zapier)",
      "Applied AI Integration",
    ],
    popular: true,
  },
  {
    id: "03",
    name: "Studio Retainer",
    price: "Custom",
    description: "Dedicated engineering and creative technology on a monthly basis.",
    features: [
      "Continuous System Evolution",
      "Priority Engineering Support",
      "Generative AI Implementation",
      "Ongoing Performance Audits",
      "Dedicated Technical Lead",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-black text-white relative border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Investment <br />
            <span className="text-zinc-500">& Scope</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We don&apos;t just build websites. We engineer scalable digital systems, automate workflows, and integrate AI to give your brand an unfair advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`group border ${plan.popular ? 'border-white bg-white/5' : 'border-zinc-800 bg-zinc-950'} p-10 hover:bg-white hover:text-black transition-colors duration-500 relative flex flex-col`}
            >
              <div className="absolute top-10 right-10 text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                {plan.id}
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 relative z-10">{plan.name}</h3>
                <div className="text-xl font-medium mb-6 relative z-10 text-zinc-300 group-hover:text-zinc-700 transition-colors duration-500">{plan.price}</div>
                <p className="text-sm text-zinc-500 group-hover:text-zinc-600 transition-colors duration-500 mb-10 relative z-10 leading-relaxed">
                  {plan.description}
                </p>
                
                <div className="space-y-4 relative z-10 mb-12">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-500 mb-6">Included</p>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm font-medium">
                      <Check size={16} className="mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <Link
                  href="/meet"
                  className={`flex items-center justify-between w-full border ${plan.popular ? 'border-white group-hover:border-black' : 'border-white/20 group-hover:border-black'} px-6 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all active:scale-95`}
                >
                  <span>Book Strategy Call</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
