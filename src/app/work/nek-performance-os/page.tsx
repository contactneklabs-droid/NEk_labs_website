import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEk Performance OS — Project | NEk LABS",
  description: "Detailed case study for NEk Performance OS: a full-stack fitness platform.",
};

export default function NekPerformanceOsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="flex flex-col tracking-tight mb-6 relative">
              <span className="text-[clamp(3.5rem,10vw,6rem)] font-bold leading-[0.75] tracking-tighter">NEk.</span>
              <span className="text-[clamp(2.5rem,8vw,4.5rem)] font-[cursive] italic font-normal text-zinc-300 -mt-[0.1em] md:-mt-[0.2em] lowercase">Performance OS</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide uppercase">
              Full-Stack Fitness Management Platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 text-xs uppercase tracking-widest font-bold">
            <div>
              <p className="text-zinc-600 mb-2">Category</p>
              <p>Fitness / Full-Stack / Analytics</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Year</p>
              <p>2025</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Status</p>
              <p>Development</p>
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
            <span className="text-[clamp(3.5rem,10vw,9rem)] font-[cursive] italic font-normal text-zinc-300 -mt-[0.2em] md:-mt-[0.3em] lowercase">Performance OS</span>
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
              <strong>NEk Performance OS</strong> (formerly NYXft / NYX Fitness) is a centralized fitness management platform designed to bring workout planning, nutrition, progress tracking and performance analytics into one digital environment.
            </p>
            <p className="text-zinc-400">
              This was one of the earliest projects moving from building individual pages into building a complete software product.
            </p>
          </div>
        </section>

        {/* Core Modules */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Core Modules</h2>
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-sm font-mono text-[10px] md:text-xs text-zinc-400 whitespace-pre overflow-x-auto leading-relaxed">
{`NEK PERFORMANCE OS

├── Authentication
├── Dashboard
├── Workout
├── Nutrition
├── Progress
├── Goals
├── Calendar
├── Reports
├── Analytics
└── Profile`}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="border border-white/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Workout System</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">Designed around structured training programs including:</p>
                <ul className="text-zinc-400 text-sm space-y-1 list-disc list-inside">
                  <li>PPL presets</li>
                  <li>Custom workouts</li>
                  <li>Workout scheduling</li>
                  <li>Exercise tracking</li>
                  <li>Training history</li>
                </ul>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Nutrition System</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">Includes concepts for:</p>
                <ul className="text-zinc-400 text-sm space-y-1 list-disc list-inside">
                  <li>Calorie calculation</li>
                  <li>Protein tracking</li>
                  <li>Nutrition planning</li>
                  <li>Food information</li>
                  <li>Diet management</li>
                </ul>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Progress System</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">Tracks:</p>
                <ul className="text-zinc-400 text-sm space-y-1 list-disc list-inside">
                  <li>Body measurements</li>
                  <li>Weight</li>
                  <li>Performance</li>
                  <li>Goals</li>
                  <li>Historical progress</li>
                </ul>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">Dashboard</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">The dashboard acts as the central control layer. Users can move between: Workout → Nutrition → Progress → Goals → Reports.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Backend Architecture */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Architecture</h2>
          <div>
            <div className="bg-zinc-900 p-8 rounded-sm font-mono text-[10px] md:text-xs text-zinc-400 whitespace-pre overflow-x-auto leading-relaxed">
{`    Frontend
       ↓
Flask Application
       ↓
SQLAlchemy ORM
       ↓
    Database
       ↓
User / Workout / Nutrition / Progress Data`}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Technology</h2>
          <div>
            <div className="flex flex-wrap gap-3">
              {['Python', 'Flask', 'SQLAlchemy', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'SQLite', 'MySQL / planned PostgreSQL', 'Cloudinary'].map(tech => (
                <span key={tech} className="border border-white/20 px-4 py-2 text-sm text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Future Architecture */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">Future Direction</h2>
          <div>
            <p className="text-xl font-light mb-8">Explorations into scaling the platform:</p>
            <ul className="text-zinc-400 space-y-4 list-disc list-inside">
              <li>AI integration</li>
              <li>Mobile application / PWA</li>
              <li>Cloud deployment</li>
              <li>Device integration</li>
              <li>Advanced analytics</li>
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
