import { Hero } from "@/components/portfolio/Hero";
import { Navigation } from "@/components/portfolio/Navigation";
import { Introduction } from "@/components/portfolio/Introduction";
import { Resume } from "@/components/portfolio/Resume";
import { ProjectsOverview } from "@/components/portfolio/ProjectsOverview";
import { VirtualLibrary } from "@/components/portfolio/projects/VirtualLibrary";
import { DietPlanner } from "@/components/portfolio/projects/DietPlanner";
import { Skills } from "@/components/portfolio/Skills";
import { Collaboration } from "@/components/portfolio/Collaboration";
import { Ethics } from "@/components/portfolio/Ethics";
import { Future } from "@/components/portfolio/Future";
import { Conclusion } from "@/components/portfolio/Conclusion";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Introduction />
      <Resume />
      <ProjectsOverview />
      <VirtualLibrary />
      <DietPlanner />
      <Skills />
      <Collaboration />
      <Ethics />
      <Future />
      <Conclusion />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
