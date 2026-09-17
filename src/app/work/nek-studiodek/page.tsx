import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEk StudioDek — Project | NEk LABS",
  description: "Detailed case study for NEk StudioDek: a desktop control and monitoring system.",
};

export default function NekStudioDekPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="flex flex-col tracking-tight mb-6 relative">
              <span className="text-[clamp(3.5rem,10vw,6rem)] font-bold leading-[0.75] tracking-tighter">NEk.</span>
              <span className="text-[clamp(2.5rem,8vw,4.5rem)] font-[cursive] italic font-normal text-zinc-300 -mt-[0.1em] md:-mt-[0.2em] lowercase">StudioDek</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide uppercase">
              Desktop System / PC Monitoring & Control
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 text-xs uppercase tracking-widest font-bold">
            <div>
              <p className="text-zinc-600 mb-2">Category</p>
              <p>Desktop Systems / Windows / Remote Control</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Year</p>
              <p>2026</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Status</p>
              <p>Advanced Prototype</p>
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
            <span className="text-[clamp(3.5rem,10vw,9rem)] font-[cursive] italic font-normal text-zinc-300 -mt-[0.2em] md:-mt-[0.3em] lowercase">StudioDek</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto max-w-4xl px-6 py-24 space-y-32">
        
        {/* Overview */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Overview</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl leading-relaxed font-light mb-8">
              <strong>NEk StudioDek</strong> is a desktop control and monitoring environment designed to unify Windows system information, application controls, audio management and remote interaction into a single interface.
            </p>
            <p className="text-zinc-400">
              The concept evolved beyond a simple desktop dashboard into a system capable of communicating with a companion mobile application, allowing the PC to become remotely accessible through a locally connected network.
            </p>
          </div>
        </section>

        {/* Core Problem */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">The Problem</h2>
          <div className="space-y-8">
            <p className="text-xl font-light">Traditional PC controls are scattered across multiple interfaces.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="border border-white/10 p-6">
                <p className="text-zinc-400 text-sm leading-relaxed">Windows settings</p>
              </div>
              <div className="border border-white/10 p-6">
                <p className="text-zinc-400 text-sm leading-relaxed">Task Manager</p>
              </div>
              <div className="border border-white/10 p-6">
                <p className="text-zinc-400 text-sm leading-relaxed">Volume controls</p>
              </div>
              <div className="border border-white/10 p-6">
                <p className="text-zinc-400 text-sm leading-relaxed">Application windows</p>
              </div>
              <div className="border border-white/10 p-6">
                <p className="text-zinc-400 text-sm leading-relaxed">System utilities</p>
              </div>
              <div className="border border-white/10 p-6">
                <p className="text-zinc-400 text-sm leading-relaxed">Hardware monitoring tools</p>
              </div>
            </div>
            
            <div className="mt-8 border-l-2 border-zinc-500 pl-6 py-2">
              <p className="text-xl font-bold uppercase tracking-wide">StudioDek attempts to bring these interactions into one centralized control environment.</p>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">System Monitoring</h3>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside">
                <li>CPU status</li>
                <li>RAM usage</li>
                <li>Storage information</li>
                <li>System state</li>
                <li>Hardware information</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Application Control</h3>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside">
                <li>Detect installed Windows applications</li>
                <li>Launch applications</li>
                <li>Manage running applications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Audio Control</h3>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside">
                <li>System mute & Volume control</li>
                <li>Media playback (Play/Pause, Prev/Next)</li>
                <li>Application-level audio control</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Remote Control</h3>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside">
                <li>Architecture allows a companion mobile device to communicate with the Windows machine over the local network.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Architecture</h2>
          <div>
            <div className="bg-zinc-900 p-8 rounded-sm font-mono text-[10px] md:text-xs text-zinc-400 whitespace-pre overflow-x-auto leading-relaxed">
{`                NEK StudioDek
                     │
             ┌───────┴───────┐
             │               │
        Desktop UI       Windows Bridge
             │               │
        Electron + JS       C#
             │               │
             └───────┬───────┘
                     │
               Windows OS
                     │
          Hardware / Applications`}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Technology</h2>
          <div>
            <div className="flex flex-wrap gap-3">
              {['Electron', 'Node.js', 'HTML', 'CSS', 'JavaScript', 'C#', 'Windows system APIs', 'Local network communication'].map(tech => (
                <span key={tech} className="border border-white/20 px-4 py-2 text-sm text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Challenges */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Challenges</h2>
          <div>
            <p className="text-xl font-light mb-8">The project involved solving problems around:</p>
            <ul className="text-zinc-400 space-y-4 list-disc list-inside">
              <li>Windows-specific system commands</li>
              <li>Desktop ↔ mobile communication</li>
              <li>Application discovery</li>
              <li>Audio control</li>
              <li>Hardware state accuracy</li>
              <li>Network pairing</li>
              <li>Bridge architecture</li>
              <li>Real-time state synchronization</li>
            </ul>
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
