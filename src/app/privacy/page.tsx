import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative z-10">
      <div className="container mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} /> BACK TO HOME
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Privacy Policy</h1>
        <div className="h-px w-full bg-zinc-900 mb-12" />

        <div className="space-y-12 text-zinc-400 text-lg leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">1. Information Collection</h2>
            <p>
              NEk LABS (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. We collect information you provide directly to us, such as when you fill out a form, request a meeting, or communicate with us. This may include your name, email address, company details, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">2. Use of Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our digital systems and creative tech services. This includes responding to your requests, sending technical notices, and communicating with you about products, services, offers, and events offered by NEk LABS.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">3. Data Security & Analytics</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. We may use third-party analytics tools (such as PostHog) to understand how users interact with our website to improve user experience. These tools may collect anonymous usage data and session information.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:contactneklabs@gmail.com" className="text-white hover:underline mt-2 inline-block">contactneklabs@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
