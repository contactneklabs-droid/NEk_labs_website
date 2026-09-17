import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative z-10">
      <div className="container mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} /> BACK TO HOME
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Cookie Policy</h1>
        <div className="h-px w-full bg-zinc-900 mb-12" />

        <div className="space-y-12 text-zinc-400 text-lg leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">2. How We Use Cookies</h2>
            <p>
              NEk LABS uses cookies to understand how you interact with our website, to improve performance, and to remember your preferences. This helps us provide you with a seamless and customized experience when exploring our digital systems and services.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly. They cannot be switched off in our systems.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
              <li><strong>Functionality Cookies:</strong> Allow the website to remember choices you make and provide enhanced, more personal features.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold uppercase tracking-tight mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:
              <br />
              <a href="mailto:contactneklabs@gmail.com" className="text-white hover:underline mt-2 inline-block">contactneklabs@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
