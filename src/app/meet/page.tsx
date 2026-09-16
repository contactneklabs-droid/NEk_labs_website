import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingEngine from "@/components/BookingEngine";

export default function MeetPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32">
      <Navigation />
      
      {/* Page Hero */}
      <section className="container mx-auto px-6 pt-16 pb-8 border-b border-zinc-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
          <div>
            <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest mb-6">
              NEk / 002<br/>DISCOVERY CALL
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
              LET'S MEET.
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-medium tracking-tight max-w-lg">
              Tell us what you're building.<br/>We'll figure out what's next.
            </p>
          </div>
          <div className="text-right border-l-2 border-zinc-800 pl-6 h-fit hidden md:block">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              NEk LABS / DISCOVERY CALL<br/>
              ~30 MIN / ONLINE
            </p>
          </div>
        </div>
      </section>

      <BookingEngine />
      
      <Footer />
    </main>
  );
}
