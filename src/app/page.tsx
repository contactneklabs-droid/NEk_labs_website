import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SystemSection from "@/components/SystemSection";
import CapabilitySection from "@/components/CapabilitySection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import MetricsSection from "@/components/MetricsSection";
import StatementSection from "@/components/StatementSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import GetInTouchImage from "@/components/GetInTouchImage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />
      <Hero />
      <ProblemSection />
      <SystemSection />
      <CapabilitySection />
      <ProcessSection />
      <ProjectsSection />
      <MetricsSection />
      <StatementSection />
      <FAQSection />
      <ContactSection />
      <GetInTouchImage />
      <Footer />
    </main>
  );
}
