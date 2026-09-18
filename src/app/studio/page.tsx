import Navigation from "@/components/Navigation";
import StudioHero from "@/components/StudioHero";
import PhilosophySection from "@/components/PhilosophySection";
import CapabilitySection from "@/components/CapabilitySection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />
      <StudioHero />
      <PhilosophySection />
      <CapabilitySection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
