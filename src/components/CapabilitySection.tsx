"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    id: "01",
    title: "WEB",
    description: "We define and architect digital futures. Our strategic framework analyzes market dynamics, identifies core opportunities, and maps comprehensive roadmaps for scalable growth. We engineer bespoke digital platforms prioritizing performance, scale, and brutalist design aesthetics.",
    link: "/pricing"
  },
  {
    id: "02",
    title: "AI",
    description: "We integrate customized LLMs and generative AI to create autonomous systems and enhanced user experiences. From predictive analytics to intelligent chatbots, we deploy neural network solutions that drive tangible business impact and operational efficiency.",
    link: "/pricing"
  },
  {
    id: "03",
    title: "AUTOMATION",
    description: "We map out manual business processes and replace them with robust, scalable data pipelines and integrations. Utilizing enterprise-grade RPA and advanced API orchestration, we turn repetitive tasks into connected, autonomous workflows.",
    link: "/pricing"
  },
  {
    id: "04",
    title: "CREATIVE TECHNOLOGY",
    description: "Experiential, interactive, and boundary-pushing code art. We utilize WebGL, custom shaders, and advanced browser APIs to create immersive digital brand experiences that refuse to be ignored.",
    link: "/meet"
  },
  {
    id: "05",
    title: "DIGITAL PRODUCTS",
    description: "End-to-end software engineering. We architect and develop full-stack SaaS applications, complex dashboards, and internal business tools using modern frameworks and specialized backend technologies.",
    link: "/meet"
  }
];

export default function CapabilitySection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section id="services" className="py-24 md:py-32 bg-black text-white overflow-hidden border-t border-zinc-900 relative">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Sticky Metadata & Title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-auto flex flex-col justify-between lg:h-[calc(100vh-16rem)]">
            <div>
              <h2 className="text-[clamp(3rem,8vw,5rem)] lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                CORE <br />
                <span className="text-zinc-500">CAPABILITIES</span>
              </h2>
            </div>
            
            <div className="hidden lg:block font-mono text-xs text-zinc-500 tracking-widest leading-loose mt-16">
              <p>[AGENCY_FRAMEWORK v3.1]</p>
              <p>[PROJECT: digital_ecosystems]</p>
              <p>[LATITUDE: 48.8566]</p>
              <p>[STATUS: DEPLOYED]</p>
              <p>[DATE: {new Date().toISOString().split('T')[0]}]</p>
            </div>
          </div>

          {/* Right Column: Accordion System */}
          <div className="lg:col-span-7 flex flex-col border-t border-zinc-800">
            {capabilities.map((cap, idx) => {
              const isExpanded = expandedIndex === idx;
              
              return (
                <div 
                  key={cap.id} 
                  className={`border-b border-zinc-800 transition-colors duration-500 ${isExpanded ? 'bg-zinc-950' : 'hover:bg-zinc-900'}`}
                >
                  <button
                    onClick={() => setExpandedIndex(idx)}
                    className="w-full text-left py-8 md:py-10 px-6 md:px-8 flex items-center justify-between group"
                  >
                    <h3 className={`text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter transition-colors duration-500 ${isExpanded ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-300'}`}>
                      {cap.title}
                    </h3>
                    <span className={`text-lg md:text-2xl font-mono transition-colors duration-500 ${isExpanded ? 'text-white' : 'text-zinc-700 group-hover:text-zinc-500'}`}>
                      {cap.id}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden px-6 md:px-8"
                      >
                        <div className="pb-10 pt-2 max-w-xl">
                          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 font-medium">
                            {cap.description}
                          </p>
                          
                          <Link 
                            href={cap.link}
                            className="group/btn inline-flex items-center gap-4 bg-white text-black py-4 px-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                          >
                            <span>INITIATE PROTOCOL</span>
                            <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          
        </div>

      </div>
    </section>
  );
}
