import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Philosophy from "@/components/Philosophy";
import Metrics from "@/components/Metrics";
import ProjectCarousel from "@/components/ProjectCarousel";
import Timeline from "@/components/Timeline";
import Insights from "@/components/Insights";
import Skills from "@/components/Skills";
import LookingFor from "@/components/LookingFor";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="border-t border-border/60" />
      <Experience />
      <Metrics />
      <div className="border-t border-border/60" />
      <Philosophy />
      <div className="border-t border-border/40" />
      <ProjectCarousel />
      <div className="border-t border-border/60" />
      <Timeline />
      <div className="border-t border-border/40" />
      <Insights />
      <div className="border-t border-border/60" />
      <Skills />
      <div className="border-t border-border/40" />
      <LookingFor />
      <div className="border-t border-border/60" />
      <Contact />
      <footer className="px-6 py-10 text-center text-muted-foreground/50 text-xs border-t border-border/40">
        © {new Date().getFullYear()} Mishal Reuel
      </footer>
    </main>
  );
};

export default Index;
