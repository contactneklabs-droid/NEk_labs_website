import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PricingHero from "@/components/pricing/PricingHero";
import PricingSystem from "@/components/pricing/PricingSystem";
import WhatsIncluded from "@/components/pricing/WhatsIncluded";
import WhatAffectsPrice from "@/components/pricing/WhatAffectsPrice";
import CustomProject from "@/components/pricing/CustomProject";
import FAQSection from "@/components/FAQSection";
import StatementSection from "@/components/StatementSection";
import Footer from "@/components/Footer";
import { pricingFaqs } from "@/lib/pricingData";

export const metadata: Metadata = {
  title: "NEk LABS — Pricing",
  description: "Clear starting points for digital work. Custom scope when the system demands it. Transparent pricing for web architecture, automation engines, and bespoke digital platforms.",
  alternates: {
    canonical: "https://neklabs.com/pricing", // Adjust canonical domain if necessary
  }
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />
      <PricingHero />
      <PricingSystem />
      <WhatsIncluded />
      <WhatAffectsPrice />
      <CustomProject />
      <FAQSection items={pricingFaqs} />
      <StatementSection />
      <Footer />
    </main>
  );
}
