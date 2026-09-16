"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import MagneticElement from "@/components/MagneticElement";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
    website: "", // Honeypot field
    source: "CONTACT",
    categories: ["OTHER"] // required by the current backend check
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('API Error');
      }
      
      setStatus("success");
      setData({ name: "", email: "", company: "", details: "", website: "", source: "CONTACT", categories: ["OTHER"] });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Have something<br />worth building?
            </h2>
            <p className="text-zinc-400 text-lg mb-12">
              Let&apos;s engineer your next digital system.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs text-zinc-600 uppercase tracking-widest font-bold mb-2">Location</h4>
                <p className="text-sm font-medium">Global / Remote First</p>
              </div>
              <div>
                <h4 className="text-xs text-zinc-600 uppercase tracking-widest font-bold mb-2">Direct Inquiry</h4>
                <a href="mailto:contactneklabs@gmail.com" className="text-sm font-medium hover:text-zinc-400 transition-colors break-all">contactneklabs@gmail.com</a>
              </div>
              <div>
                <h4 className="text-xs text-zinc-600 uppercase tracking-widest font-bold mb-2">Social</h4>
                <a href="https://www.instagram.com/nek_labs/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-zinc-400 transition-colors">@nek_labs</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {status === "success" ? (
              <div className="border border-zinc-800 bg-black p-8 md:p-12 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-8">
                    01 / Transmission Received
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                    Project<br />Submitted.
                  </h3>
                  <p className="text-zinc-400 text-lg mb-8 max-w-sm">
                    Your project details have been received by NEk LABS.
                    <br /><br />
                    We'll review the information and contact you regarding the next step.
                  </p>
                </div>

                <div className="space-y-8 mt-12">
                  <div className="space-y-2 border-t border-zinc-900 pt-6">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                      <span>Status</span>
                      <span className="text-white">Received</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                      <span>Source</span>
                      <span className="text-white">Contact</span>
                    </div>
                  </div>

                  <MagneticElement className="w-full">
                    <button 
                      onClick={() => setStatus("idle")} 
                      className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
                    >
                      Return to Site <ArrowUpRight size={18} />
                    </button>
                  </MagneticElement>
                </div>
              </div>
            ) : (
              <>
                {/* Honeypot Field */}
                <div className="absolute opacity-0 -z-10" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input 
                    id="website" 
                    type="text" 
                    name="website" 
                    tabIndex={-1} 
                    autoComplete="off" 
                    value={data.website} 
                    onChange={e => setData({...data, website: e.target.value})} 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Name</label>
                    <input required value={data.name} onChange={e => setData({...data, name: e.target.value})} type="text" className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-zinc-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Email</label>
                    <input required value={data.email} onChange={e => setData({...data, email: e.target.value})} type="email" className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-zinc-500 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Company</label>
                  <input value={data.company} onChange={e => setData({...data, company: e.target.value})} type="text" className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-zinc-500 transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Project Description</label>
                  <textarea required value={data.details} onChange={e => setData({...data, details: e.target.value})} rows={4} className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none"></textarea>
                </div>

                {status === "error" && (
                  <div className="border border-red-900 bg-red-950/20 p-4 space-y-2">
                    <p className="text-red-500 text-sm font-bold uppercase tracking-widest">Unable to Submit.</p>
                    <p className="text-red-400/80 text-xs">Something went wrong while sending your request.<br/>Please try again or contact us directly at:<br/><a href="mailto:contactneklabs@gmail.com" className="font-bold underline hover:text-red-400 transition-colors">contactneklabs@gmail.com</a></p>
                  </div>
                )}

                <MagneticElement className="w-full">
                  <button 
                    disabled={status === "loading"}
                    type="submit" 
                    className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50"
                  >
                    {status === "loading" ? "Initializing..." : "Start a Project"} 
                    {status !== "loading" && <ArrowUpRight size={18} />}
                  </button>
                </MagneticElement>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
