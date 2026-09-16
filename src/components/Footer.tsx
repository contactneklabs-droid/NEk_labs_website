import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              NEk. Labs
            </h2>
            <p className="text-zinc-400 max-w-sm text-balance">
              Digital systems for ambitious brands.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-500">Navigation</h3>
            <ul className="space-y-4 flex flex-col">
              <li><Link href="#work" className="hover:text-zinc-400 transition-colors uppercase text-sm font-medium">Work</Link></li>
              <li><Link href="#services" className="hover:text-zinc-400 transition-colors uppercase text-sm font-medium">Services</Link></li>
              <li><Link href="#about" className="hover:text-zinc-400 transition-colors uppercase text-sm font-medium">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-zinc-500">Contact</h3>
            <ul className="space-y-4 flex flex-col">
              <li><a href="mailto:contactneklabs@gmail.com" className="flex items-center gap-1 hover:text-zinc-400 transition-colors uppercase text-sm font-medium break-all">contactneklabs@gmail.com <ArrowUpRight size={14}/></a></li>
              <li><a href="https://www.instagram.com/nek_labs/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-400 transition-colors uppercase text-sm font-medium">Instagram <ArrowUpRight size={14}/></a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 uppercase font-medium tracking-wide">
          <p>© {new Date().getFullYear()} NEk. Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
