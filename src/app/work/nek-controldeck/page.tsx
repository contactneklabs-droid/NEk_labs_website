import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEk ControlDeck — Project | NEk LABS",
  description: "Detailed case study for NEk ControlDeck: a mobile remote-control system.",
};

export default function NekControlDeckPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="flex flex-col tracking-tight mb-6 relative">
              <span className="text-[clamp(3.5rem,10vw,6rem)] font-bold leading-[0.75] tracking-tighter">NEk.</span>
              <span className="text-[clamp(2.5rem,8vw,4.5rem)] font-[cursive] italic font-normal text-zinc-300 -mt-[0.1em] md:-mt-[0.2em] lowercase">ControlDeck</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide uppercase">
              Mobile Remote-Control System
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 text-xs uppercase tracking-widest font-bold">
            <div>
              <p className="text-zinc-600 mb-2">Category</p>
              <p>Mobile Systems / Remote Control / Networking</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Year</p>
              <p>2026</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Status</p>
              <p>Under Development</p>
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
            <span className="text-[clamp(3.5rem,10vw,9rem)] font-[cursive] italic font-normal text-zinc-300 -mt-[0.2em] md:-mt-[0.3em] lowercase">ControlDeck</span>
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
              <strong>NEk ControlDeck</strong> is a mobile control surface for Windows, designed to turn a smartphone or tablet into a real-time remote interface for system controls, applications, media and automation.
            </p>
            <p className="text-zinc-400">
              As the mobile companion to the StudioDek ecosystem, the goal is to allow a mobile device to act as a remote control surface for a Windows PC over a local Wi-Fi connection.
            </p>
          </div>
        </section>

        {/* Core Concept */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">The Concept</h2>
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-sm font-mono text-[10px] md:text-xs text-zinc-400 whitespace-pre overflow-x-auto leading-relaxed">
{`          ANDROID DEVICE
                 ↓
            LOCAL WI-FI
                 ↓
          NEK CONTROL BRIDGE
                 ↓
             WINDOWS PC`}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Quick Deck</h3>
              <p className="text-zinc-400 text-sm">Custom action buttons for frequently used PC operations.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Audio Deck</h3>
              <p className="text-zinc-400 text-sm">Controls such as: Mute, Volume, Play, Pause, Previous, Next.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Application Deck</h3>
              <p className="text-zinc-400 text-sm">Ability to retrieve and interact with Windows applications.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">PC Status & Pairing</h3>
              <p className="text-zinc-400 text-sm">The mobile interface displays information received from the desktop system, secured by a trusted pairing connection.</p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Architecture</h2>
          <div>
            <div className="bg-zinc-900 p-8 rounded-sm font-mono text-[10px] md:text-xs text-zinc-400 whitespace-pre overflow-x-auto leading-relaxed">
{`          NEK ControlDeck
                 │
          Android / PWA
                 │
              Wi-Fi
                 │
          Pairing Layer
                 │
         Windows Bridge
                 │
        NEK StudioDek
                 │
             Windows`}
            </div>
          </div>
        </section>

        {/* Development Problems Encountered */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Challenges</h2>
          <div>
            <p className="text-xl font-light mb-8">Significant engineering problems encountered during development:</p>
            <ul className="text-zinc-400 space-y-4 list-disc list-inside">
              <li>Pairing responses becoming stuck</li>
              <li>Windows application discovery over network</li>
              <li>Audio commands not functioning correctly remotely</li>
              <li>Storage information inaccuracies</li>
              <li>Windows/macOS command differences</li>
              <li>Auto-connect reliability over the same Wi-Fi network</li>
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
