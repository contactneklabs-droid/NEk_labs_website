import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";


export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navigation />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
