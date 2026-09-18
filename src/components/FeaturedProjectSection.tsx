"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const proj = {
  id: 1,
  title: "NEk Forge",
  displayTitle: "NEk | Forge",
  category: "Design System / UI Library",
  year: "2026",
  status: "ACTIVE",
  slug: "nek-forge",
  image: "/images/projects/bg_1.jpg",
};

export default function FeaturedProjectSection() {
  return (
    <section className="w-full pt-32 pb-16 bg-zinc-950 text-white selection:bg-white selection:text-black border-t border-zinc-900">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
        <h2 className="text-[clamp(3rem,8vw,5rem)] font-black uppercase tracking-tighter leading-none">
          Start Project
        </h2>
      </div>

      {/* Featured Project */}
      <div className="container mx-auto px-6 flex flex-col items-center group/card transition-all duration-500">
        
        <Link href={`/work/${proj.slug}`} className="block w-full max-w-6xl aspect-[16/9] md:aspect-[21/9] bg-black border border-white/10 hover:border-white/30 transition-colors duration-500 relative overflow-hidden flex flex-col items-center justify-center group/image">
          
          <Image 
            src={proj.image} 
            alt={proj.title}
            fill
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale group-hover/image:scale-105 group-hover/image:opacity-40 transition-all duration-1000 ease-out"
          />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] z-10 pointer-events-none"></div>
          
          <h3 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase tracking-tighter text-white z-20 scale-95 group-hover/card:scale-100 transition-transform duration-700 mix-blend-difference flex flex-col items-center leading-[0.8] text-center px-4">
            <span>NEk.</span>
            <span className="font-playfair italic font-normal text-zinc-300 text-[clamp(2rem,5vw,4.5rem)] lowercase">forge</span>
          </h3>
        </Link>

        {/* Meta Data */}
        <div className="w-full max-w-6xl mt-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-zinc-600 font-bold text-sm tracking-widest">01</span>
              <h4 className="text-2xl font-black uppercase tracking-tighter text-white">
                {proj.displayTitle}
              </h4>
            </div>
            
            <div className="flex flex-wrap gap-2 text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest mt-3">
              <span>{proj.category}</span>
              <span className="text-zinc-700">•</span>
              <span>{proj.year}</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-300">{proj.status}</span>
            </div>
          </div>

          <Link 
            href={`/work/${proj.slug}`} 
            className="flex-shrink-0 inline-flex items-center gap-2 text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover/card:text-white transition-colors"
          >
            VIEW CASE STUDY <ArrowUpRight size={14} className="group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* View All Projects Button */}
        <div className="mt-20 flex justify-center w-full">
          <Link 
            href="/work" 
            className="group inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-5 font-bold tracking-[0.2em] uppercase text-xs hover:bg-zinc-200 transition-all duration-300 hover:scale-[1.02]"
          >
            VIEW ALL PROJECTS
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
