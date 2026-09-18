import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEk Automation Ecosystem — Project | NEk LABS",
  description: "Detailed case study for NEk Automation Ecosystem: an experimental digital operations platform.",
};

export default function NekAutomationEcosystemPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="flex flex-col tracking-tight mb-6 relative">
              <span className="text-[clamp(3.5rem,10vw,6rem)] font-bold leading-[0.75] tracking-tighter">NEk.</span>
              <span className="text-[clamp(2.5rem,8vw,4.5rem)] font-playfair italic font-normal text-zinc-300 -mt-[0.1em] md:-mt-[0.2em] lowercase">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide uppercase">
              AI / Automation / Digital Operations Platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 text-xs uppercase tracking-widest font-bold">
            <div>
              <p className="text-zinc-600 mb-2">Category</p>
              <p>AI / Automation / Digital Operations</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Year</p>
              <p>2026</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Status</p>
              <p>Active Development</p>
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
            <span className="text-[clamp(5rem,15vw,14rem)] font-bold text-white leading-[0.75] tracking-tighter">NEk.</span>
            <span className="text-[clamp(3.5rem,10vw,9rem)] font-playfair italic font-normal text-zinc-300 -mt-[0.2em] md:-mt-[0.3em] lowercase">Automation</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto max-w-4xl px-6 py-24 space-y-32">
        
        {/* Concept */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">The Concept</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl leading-relaxed font-light mb-8">
              <strong>NEk Automation Ecosystem</strong> is an experimental digital operations platform combining AI, workflow automation, web infrastructure and browser automation into a centralized command environment.
            </p>
            <p className="text-zinc-400">
              The system is intended to provide a centralized operational environment for managing digital workflows across clients, websites, and content.
            </p>
          </div>
        </section>

        {/* Major Areas */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Major Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Command Center</h3>
              <ul className="text-zinc-400 text-sm space-y-1 list-disc list-inside">
                <li>Projects & Clients</li>
                <li>Websites & Content</li>
                <li>Automations & Analytics</li>
                <li>Settings</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Content Automation</h3>
              <p className="text-zinc-400 text-sm">Automation workflows for content-related processes.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Website Factory</h3>
              <p className="text-zinc-400 text-sm">Concept for automating parts of website creation and deployment workflows.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Client Workflow</h3>
              <p className="text-zinc-400 text-sm">Centralized handling of client-related operations.</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Automation Backend</h3>
              <p className="text-zinc-400 text-sm">Independent automation layer intended to execute workflows without tightly coupling everything to the frontend.</p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Architecture</h2>
          <div>
            <div className="bg-zinc-900 p-8 rounded-sm font-mono text-[10px] md:text-xs text-zinc-400 whitespace-pre overflow-x-auto leading-relaxed">
{`                    NEK COMMAND
                        │
       ┌────────────────┼────────────────┐
       │                │                │
    CONTENT          WEBSITES         CLIENTS
       │                │                │
       └────────────────┼────────────────┘
                        │
                   AUTOMATIONS
                        │
                ┌───────┴────────┐
                │                │
               AI              n8n
                │                │
            Playwright       Workflows`}
            </div>
          </div>
        </section>

        {/* Engineering Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Philosophy</h2>
          <div>
            <blockquote className="border-l-4 border-white pl-6 my-8 text-2xl font-bold uppercase tracking-tight">
              &quot;Automate repetitive digital operations instead of repeatedly performing them manually.&quot;
            </blockquote>
          </div>
        </section>

        {/* Technology */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Technology</h2>
          <div>
            <div className="flex flex-wrap gap-3">
              {['React / Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL / Supabase', 'n8n', 'Playwright', 'AI integrations'].map(tech => (
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
