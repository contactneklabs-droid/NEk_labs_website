import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative z-10">
      <div className="container mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} /> BACK TO HOME
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Terms of Service</h1>
        <div className="h-px w-full bg-zinc-900 mb-12" />

        <div className="space-y-12 text-zinc-400 text-lg leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website and engaging with NEk LABS for digital systems, automation, or creative tech services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">2. Intellectual Property</h2>
            <p>
              The design, code, graphics, and interactive elements of this website are owned by NEk LABS. Upon engaging in a project, intellectual property rights of the delivered digital systems will be outlined in your specific project contract or Statement of Work.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">3. Experimental Technologies</h2>
            <p>
              NEk LABS often builds utilizing cutting-edge and experimental technologies (including WebGL, AI integrations, and automation networks). While we strive for absolute stability, clients acknowledge that experimental tech may behave unpredictably in certain edge cases.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">4. Limitation of Liability</h2>
            <p>
              In no event shall NEk LABS, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
