import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEk FORGE — Case Study | NEk LABS",
  description: "Detailed product and engineering case study for NEk Forge: a website intelligence and digital automation system.",
};

export default function NekForgeCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 border-b border-white/10">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] mb-6">
              NEk FORGE
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide uppercase">
              Website Intelligence & Digital Automation System
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 text-xs uppercase tracking-widest font-bold">
            <div>
              <p className="text-zinc-600 mb-2">Category</p>
              <p>Automation / Digital Systems</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Year</p>
              <p>2026</p>
            </div>
            <div>
              <p className="text-zinc-600 mb-2">Type</p>
              <p>Experimental Product</p>
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
        <div className="w-full h-[40vh] md:h-[70vh] relative">
          <Image 
            src="/nek-forge.jpg" 
            alt="NEk Forge Overview" 
            fill 
            className="object-cover grayscale opacity-70"
            priority
          />
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto max-w-4xl px-6 py-24 space-y-32">
        
        {/* 01 Overview */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">01 / Overview</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl leading-relaxed font-light mb-8">
              <strong>NEk Forge</strong> is an automation-focused digital intelligence system designed to analyze websites, identify technical and strategic issues, generate actionable reports, and connect those insights to downstream improvement workflows.
            </p>
            <p>
              Instead of treating a website audit as a static list of scores, NEk Forge is designed around a simple principle:
            </p>
            <blockquote className="border-l-4 border-white pl-6 my-8 text-2xl font-bold uppercase tracking-tight">
              "Find what matters. Understand why. Know what to change."
            </blockquote>
            <p>
              The system combines deterministic website analysis, browser automation, structured evidence collection, local AI analysis, report generation, and workflow automation into a single environment.
            </p>
            <div className="bg-zinc-900 p-8 rounded-sm my-8 font-mono text-sm overflow-x-auto text-zinc-400">
              <p className="mb-4 text-white">The long-term objective is to move the website workflow from:</p>
              <pre>AUDIT<br/>  ↓<br/>REPORT</pre>
              <p className="my-4 text-white">to:</p>
              <pre>AUDIT<br/>  ↓<br/>INSIGHT<br/>  ↓<br/>PRIORITY<br/>  ↓<br/>ACTION<br/>  ↓<br/>IMPLEMENTATION</pre>
            </div>
          </div>
        </section>

        {/* 02 The Problem */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">02 / The Problem</h2>
          <div className="space-y-8">
            <p className="text-xl font-light">Traditional website audits often create a disconnect between <strong>diagnosis and execution</strong>.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="border border-white/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Fragmented Information</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Technical, SEO, performance, accessibility, UX and conversion information can exist across different tools.</p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Score-Heavy Reporting</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">A score can indicate that something is wrong without clearly explaining what caused it, why it matters, or how to fix it.</p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Repetitive Manual Work</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Generating reports, organizing findings, prioritizing issues and communicating results can require significant manual effort.</p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">Audit-to-Action Gap</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">The biggest problem is that the audit frequently becomes the <strong>end of the process</strong>, instead of the beginning. NEk Forge was designed to close that gap.</p>
              </div>
            </div>
          </div>
        </section>

        <Image 
          src="/forge-network.jpg" 
          alt="NEk Forge Network Architecture" 
          width={1200} 
          height={675} 
          className="w-full grayscale opacity-80 rounded-sm"
        />

        {/* 03 The Concept */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">03 / The Concept</h2>
          <div>
            <p className="text-lg text-zinc-300 mb-8">The core NEk Forge workflow architecture:</p>
            <div className="bg-zinc-900 p-8 rounded-sm font-mono text-[10px] md:text-xs text-zinc-400 whitespace-pre overflow-x-auto leading-relaxed">
{`                  WEBSITE
                     ↓
              SITE DISCOVERY
                     ↓
           CONTROLLED CRAWLING
                     ↓
       ┌─────────────┴─────────────┐
       ↓                           ↓
   PLAYWRIGHT                   LIGHTHOUSE
       ↓                           ↓
       └─────────────┬─────────────┘
                     ↓
              RAW EVIDENCE
                     ↓
             NORMALIZATION
                     ↓
             DEDUPLICATION
                     ↓
            ROOT-CAUSE ANALYSIS
                     ↓
          EVIDENCE VALIDATION
                     ↓
                 AI LAYER
                     ↓
             ACTIONABLE FINDINGS
                     ↓
               SCORING ENGINE
                     ↓
              AUDIT RESULT
                ↙    ↓    ↘
              UI    PDF   JSON
                     ↓
             CLIENT DELIVERY
                     ↓
          IMPROVEMENT WORKFLOW`}
            </div>
            <div className="mt-8 border-l-2 border-zinc-500 pl-6 py-2">
              <p className="text-xl font-bold uppercase tracking-wide">The important architectural decision is that AI does not replace the audit engine.</p>
              <p className="text-zinc-400 mt-2">The website is measured first. AI interprets the resulting evidence second.</p>
            </div>
          </div>
        </section>

        {/* 04 What We Analyze */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">04 / Analysis Scope</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Technical</h3>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside">
                <li>Page loading & HTTP responses</li>
                <li>Console events & Network failures</li>
                <li>Internal links & Browser behavior</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">SEO</h3>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside">
                <li>Titles, Meta, H1 & Hierarchy</li>
                <li>Canonicals & Robots signals</li>
                <li>Structured data & Sitemap</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">Performance</h3>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside">
                <li>Deterministic Lighthouse Data</li>
                <li>FCP, LCP, CLS, TTFB</li>
                <li>Navigation & Resource timing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 pb-2 border-b border-white/20">UX / UI / Conversion</h3>
              <ul className="text-zinc-400 text-sm space-y-2 list-disc list-inside">
                <li>Visual hierarchy & Navigation</li>
                <li>Interaction paths & CTAs</li>
                <li>Forms, Pricing, Booking flows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 05 Evidence First & 06 AI Layer */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">05 / Architecture</h2>
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Evidence First</h3>
              <p className="text-zinc-400 mb-6">One of the core principles behind NEk Forge is: <strong>No evidence → no claim.</strong></p>
              <p className="text-zinc-400 mb-6">The system separates raw browser observations from actual actionable findings. For example, 168 network events does <strong>not</strong> mean 168 problems. NEk Forge processes information through normalization, deduplication, and root cause analysis.</p>
              <div className="bg-zinc-900 p-6 font-mono text-sm text-zinc-400 rounded-sm">
                A finding must answer:<br/>
                WHAT IS WRONG?<br/>
                WHY DOES IT MATTER?<br/>
                WHAT EVIDENCE SUPPORTS IT?<br/>
                WHAT SHOULD CHANGE?<br/>
                HOW IMPORTANT IS IT?
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Local-First AI Layer</h3>
              <p className="text-zinc-400 mb-6">Instead of requiring every audit request to be sent to a paid external AI API, the system is designed around a local AI runtime using Ollama and open-weight models.</p>
              <p className="text-zinc-400">This ensures <strong>Privacy</strong> (website evidence remains local), <strong>Cost Control</strong> (no per-request cloud API bills), and <strong>Model Flexibility</strong>.</p>
            </div>
          </div>
        </section>

        <Image 
          src="/forge-dashboard.jpg" 
          alt="NEk Forge Dashboard UI" 
          width={1200} 
          height={675} 
          className="w-full grayscale opacity-80 rounded-sm"
        />

        {/* 08 Audit Intelligence */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">08 / Intelligence</h2>
          <div>
            <p className="text-lg mb-8">Every finding is structured around actionable information, turning the audit from a collection of observations into a prioritized engineering document.</p>
            
            <div className="border border-white/20 p-8 relative">
              <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Example Finding Output</div>
              <h4 className="text-xl font-bold mb-4 uppercase">Missing Meta Description</h4>
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div><span className="text-zinc-500">Category:</span> SEO</div>
                <div><span className="text-zinc-500">Severity:</span> <span className="text-red-400">High</span></div>
              </div>
              <div className="space-y-4 text-sm text-zinc-300">
                <p><strong>Problem:</strong> A required metadata element is missing from the affected page.</p>
                <p><strong>Why it matters:</strong> Search engines and users may have less context about the page.</p>
                <p><strong>What to change:</strong> Add a unique, relevant meta description.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 16 From Audit To Action */}
        <section className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
          <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest sticky top-32 h-fit">16 / Philosophy</h2>
          <div>
            <p className="text-2xl font-light mb-12">The long-term product philosophy can be summarized as:</p>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">REVEAL</h3>
                <p className="text-zinc-400">Understand what is actually happening.</p>
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">REWORK</h3>
                <p className="text-zinc-400">Prioritize what needs to change.</p>
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">REBUILD</h3>
                <p className="text-zinc-400">Turn those decisions into implementation.</p>
              </div>
            </div>

            <div className="mt-16 bg-white text-black p-8">
              <p className="text-lg font-bold uppercase tracking-widest mb-4">This changes the role of an audit from:</p>
              <p className="text-xl font-light text-zinc-600 mb-6 italic">“Here is what's wrong.”</p>
              <p className="text-lg font-bold uppercase tracking-widest mb-4">to:</p>
              <p className="text-2xl font-bold uppercase tracking-tight">“Here is what's wrong, why it matters, what to prioritize, and what comes next.”</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pt-24 border-t border-white/10 text-center">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-tighter leading-none mb-8">
            Build What<br/>Comes Next.
          </h2>
          <Link
            href="/meet"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors active:scale-95"
          >
            DISCUSS A SYSTEM <ArrowUpRight size={16} />
          </Link>
        </section>

      </article>

      <Footer />
    </main>
  );
}
