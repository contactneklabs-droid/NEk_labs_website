"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "NEk Forge",
    displayTitle: "NEk | Forge",
    category: "Design System / UI Library",
    year: "2026",
    status: "ACTIVE",
    slug: "nek-forge",
    image: "/images/projects/bg_1.jpg",
  },
  {
    id: 2,
    title: "NEk StudioDek",
    displayTitle: "NEk | StudioDek",
    category: "Desktop System / PC Control",
    year: "2026",
    status: "ADVANCED PROTOTYPE",
    slug: "nek-studiodek",
    image: "/images/projects/bg_2.jpg",
  },
  {
    id: 3,
    title: "NEk ControlDeck",
    displayTitle: "NEk | ControlDeck",
    category: "Mobile Control / Networking",
    year: "2026",
    status: "UNDER DEVELOPMENT",
    slug: "nek-controldeck",
    image: "/images/projects/bg_3.jpg",
  },
  {
    id: 4,
    title: "NEk Performance OS",
    displayTitle: "NEk | Performance OS",
    category: "Fitness & Performance System",
    year: "2025",
    status: "UNDER DEVELOPMENT",
    slug: "nek-performance-os",
    image: "/images/projects/bg_4.jpg",
  },
  {
    id: 5,
    title: "NEk Smart Device Control",
    displayTitle: "NEk | Smart Device Control",
    category: "PWA / QR Authentication",
    year: "2025",
    status: "ACTIVE PROTOTYPE",
    slug: "nek-smart-device-control",
    image: "/images/projects/bg_1.jpg",
  },
  {
    id: 6,
    title: "NEk Event Management System",
    displayTitle: "NEk | Event System",
    category: "Web Application / PHP / MySQL",
    year: "2024",
    status: "COMPLETED",
    slug: "nek-event-management-system",
    image: "/images/projects/bg_2.jpg",
  },
  {
    id: 7,
    title: "NEk OS",
    displayTitle: "NEk | OS",
    category: "Experimental / Productivity",
    year: "2026",
    status: "EXPERIMENTAL",
    slug: "nek-os",
    image: "/images/projects/bg_3.jpg",
  },
  {
    id: 8,
    title: "NEk Essentials",
    displayTitle: "NEk | Essentials",
    category: "Creative Tech / Video Processing",
    year: "2026",
    status: "CONCEPT / DEVELOPMENT",
    slug: "nek-essentials",
    image: "/images/projects/bg_4.jpg",
  },
  {
    id: 9,
    title: "NEk Automation Ecosystem",
    displayTitle: "NEk | Automation Ecosystem",
    category: "AI / Digital Operations Platform",
    year: "2026",
    status: "ACTIVE DEVELOPMENT",
    slug: "nek-automation-ecosystem",
    image: "/images/projects/bg_1.jpg",
  },
  {
    id: 10,
    title: "Gokush Photography",
    displayTitle: "Gokush Photography",
    category: "Client Work / Web Development",
    year: "2025",
    status: "COMPLETED & DEPLOYED",
    slug: "gokush-photography",
    image: "/images/projects/bg_2.jpg",
  },
];

export default function ProjectsSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    }
  };

  return (
    <section id="work" className="w-full pt-32 pb-16 bg-zinc-950 text-white selection:bg-white selection:text-black border-t border-zinc-900">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
        <h2 className="text-[clamp(3rem,8vw,5rem)] font-black uppercase tracking-tighter leading-none">
          Selected Work
        </h2>
        <div className="text-right">
          <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold">
            Scroll to Explore
          </p>
          <div className="flex items-center justify-end gap-4 mt-2">
            <div className="w-24 md:w-32 h-[2px] bg-white/10 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-white transition-all duration-75 ease-out" 
                style={{ width: `${Math.max(0, Math.min(100, scrollProgress * 100))}%` }}
              ></div>
            </div>
            <p className="text-zinc-300 uppercase tracking-widest text-xs font-bold">
              [ 01 — 10 ]
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Slider */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full overflow-x-auto flex gap-6 px-6 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] group/slider"
      >
        {projects.map((proj) => (
          <div 
            key={proj.id} 
            className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center md:snap-start flex flex-col group/card transition-all duration-500 md:group-hover/slider:opacity-30 md:group-hover/slider:blur-[2px] md:hover:!opacity-100 md:hover:!blur-none"
          >
            {/* Uniform Thumbnail */}
            <Link href={`/work/${proj.slug}`} className="block w-full aspect-[4/3] bg-black border border-white/10 hover:border-white/30 transition-colors duration-500 relative overflow-hidden flex flex-col items-center justify-center group/image">
              
              {/* Monochromatic Background Image */}
              <Image 
                src={proj.image} 
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 60vw, 45vw"
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale group-hover/image:scale-105 group-hover/image:opacity-40 transition-all duration-1000 ease-out"
              />

              {/* CSS Noise Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] z-10 pointer-events-none"></div>
              
              {/* Visual Title */}
              <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase tracking-tighter text-white z-20 scale-95 group-hover/card:scale-100 transition-transform duration-700 mix-blend-difference flex flex-col items-center leading-[0.8] text-center px-4">
                {proj.title.startsWith("NEk ") ? (
                  <>
                    <span>NEk.</span>
                    <span className="font-playfair italic font-normal text-zinc-300 text-[clamp(1.8rem,4vw,3.5rem)] lowercase">{proj.title.replace("NEk ", "")}</span>
                  </>
                ) : (
                  <span>{proj.title}</span>
                )}
              </h3>
            </Link>

            {/* Meta Data */}
            <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-zinc-600 font-bold text-sm tracking-widest">{proj.id < 10 ? `0${proj.id}` : proj.id}</span>
                  <h4 className="text-2xl font-black uppercase tracking-tighter text-white">
                    {proj.displayTitle}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2 text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest mt-3">
                  <span>{proj.category}</span>
                  <span className="text-zinc-700">•</span>
                  <span>{proj.year}</span>
                  <span className="text-zinc-700">•</span>
                  <span className="text-zinc-300">
                    {proj.status}
                  </span>
                </div>
              </div>

              <Link 
                href={`/work/${proj.slug}`} 
                className="flex-shrink-0 inline-flex items-center gap-2 text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover/card:text-white transition-colors"
              >
                VIEW CASE STUDY <ArrowUpRight size={14} className="group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}

        {/* End Spacer to allow the last card to reach the left side on desktop */}
        <div className="flex-shrink-0 w-[5vw] md:w-[35vw] lg:w-[50vw]"></div>
      </div>

    </section>
  );
}
