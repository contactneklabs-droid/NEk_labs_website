import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gokush Photography — Client Project | NEk LABS",
  description: "Detailed case study for Gokush Photography: a real client project.",
};

export default function GokushPhotographyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="flex flex-col tracking-tight mb-6 relative">
              <span className="text-[clamp(3.5rem,10vw,6rem)] font-bold leading-[0.75] tracking-tighter">Gokush</span>
              <span className="text-[clamp(2.5rem,8vw,4.5rem)] font-[cursive] italic font-normal text-zinc-300 -mt-[0.1em] md:-mt-[0.2em] lowercase">Photography</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide uppercase">
              Real Client Project
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 text-xs uppercase tracking-widest font-bold">
            <div>
              <p className="text-zinc-600 mb-2">Category</p>
              <p>Client Work / Web Development</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Year</p>
              <p>2025</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Status</p>
              <p>Completed + Deployed</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Built By</p>
              <p>NEk LABS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full">
        <div className="w-full h-[40vh] md:h-[60vh] bg-black border-b border-white/10 relative overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
          <div className="z-10 flex flex-col items-center justify-center tracking-tight relative text-center">
            <span className="text-[clamp(5rem,15vw,14rem)] font-bold text-white leading-[0.75] tracking-tighter">Gokush</span>
            <span className="text-[clamp(3.5rem,10vw,9rem)] font-[cursive] italic font-normal text-zinc-300 -mt-[0.2em] md:-mt-[0.3em] lowercase">Photography</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto max-w-4xl px-6 py-24 space-y-32">
        
        {/* Objective */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Objective</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl leading-relaxed font-light mb-8">
              <strong>Gokush Photography</strong> is a client website developed for a photography business.
            </p>
            <p className="text-zinc-400">
              The goal was to create a lightweight, responsive photography website capable of presenting visual work while maintaining performance and simplifying media management.
            </p>
          </div>
        </section>

        {/* Media Architecture */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Architecture</h2>
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-sm font-mono text-[10px] md:text-xs text-zinc-400 whitespace-pre overflow-x-auto leading-relaxed">
{`          Website
             ↓
        Cloudinary
             ↓
Optimized Photography Assets
             ↓
 Responsive Web Delivery`}
            </div>
          </div>
        </section>

        {/* Development Work */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <ul className="text-zinc-400 text-sm space-y-4 list-disc list-inside">
                <li>Website structure</li>
                <li>Responsive design</li>
                <li>Frontend development</li>
                <li>Cloudinary integration</li>
                <li>Image delivery</li>
                <li>Deployment</li>
                <li>Domain configuration</li>
                <li>DNS & SSL / Hosting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Significance */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Significance</h2>
          <div>
            <div className="border-l-2 border-zinc-500 pl-6 py-2">
              <p className="text-xl font-bold uppercase tracking-wide">Why this project matters</p>
              <p className="text-zinc-400 mt-2">This is different from experimental projects because it demonstrates the full lifecycle: <strong>Client → Requirement → Development → Deployment → Live Product</strong>.</p>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Technology</h2>
          <div>
            <div className="flex flex-wrap gap-3">
              {['HTML', 'CSS', 'JavaScript', 'Cloudinary', 'Netlify', 'GoDaddy', 'DNS configuration', 'SSL'].map(tech => (
                <span key={tech} className="border border-white/20 px-4 py-2 text-sm text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pt-24 border-t border-white/10 text-center">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-tighter leading-none mb-8">
            Build What<br/>Comes Next.
          </h2>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors active:scale-95"
          >
            VIEW ALL PROJECTS <ArrowUpRight size={16} />
          </Link>
        </section>

      </article>

      <Footer />
    </main>
  );
}
