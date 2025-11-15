import { Code, ArrowRight } from "lucide-react";

export const ProjectsOverview = () => {
  const scrollToProject = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Interdisciplinary Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
            Real-world solutions built with modern web technologies, combining technical skills with creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-card rounded-xl p-8 card-shadow hover:card-elevated transition-all cursor-pointer"
               onClick={() => scrollToProject("virtual-library")}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Code className="text-accent" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-bold text-primary group-hover:text-accent transition-colors">
                  Virtual Library
                </h3>
                <p className="text-sm text-muted-foreground">Digital Learning Platform</p>
              </div>
            </div>
            
            <p className="text-foreground mb-4 leading-relaxed">
              An online platform designed to help students access digital books seamlessly, featuring user authentication, 
              search functionality, and an admin panel for resource management.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["PHP", "MySQL", "JavaScript", "HTML/CSS"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-muted text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            
            <button className="flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
              View Details <ArrowRight size={18} />
            </button>
          </div>

          <div className="group bg-card rounded-xl p-8 card-shadow hover:card-elevated transition-all cursor-pointer"
               onClick={() => scrollToProject("diet-planner")}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-coral/10 rounded-lg group-hover:bg-coral/20 transition-colors">
                <Code className="text-coral" size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-bold text-primary group-hover:text-coral transition-colors">
                  Diet Planner
                </h3>
                <p className="text-sm text-muted-foreground">Health & Nutrition System</p>
              </div>
            </div>
            
            <p className="text-foreground mb-4 leading-relaxed">
              A personalized diet planning system that generates customized meal plans based on user health goals, 
              dietary preferences, and nutritional requirements.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["PHP", "MySQL", "JavaScript", "HTML/CSS"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-muted text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            
            <button className="flex items-center gap-2 text-coral font-medium group-hover:gap-3 transition-all">
              View Details <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
