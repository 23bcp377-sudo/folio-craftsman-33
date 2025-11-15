import { Rocket, Target, Code, Cloud, TrendingUp, Calendar } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const Future = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section 
      ref={ref}
      id="future" 
      className={`section-padding bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Future Aspirations & Learning Plan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
            Charting a path toward full-stack mastery and entrepreneurial innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-coral/10 rounded-xl p-8 card-elevated border border-accent/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-accent/20 rounded-xl">
                <Rocket className="text-accent" size={36} />
              </div>
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary">Career Goal</h3>
              </div>
            </div>
            <p className="text-xl font-medium text-foreground leading-relaxed">
              Become a <span className="text-accent font-bold">Full-Stack Developer</span> and launch a 
              <span className="text-coral font-bold"> tech startup</span> that solves real-world problems through innovative digital solutions.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 card-shadow">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
              <Target className="text-coral" size={28} />
              Future Skills to Acquire
            </h3>
            <div className="space-y-3">
              {[
                { skill: "React.js", desc: "Modern frontend framework for dynamic UIs", icon: Code },
                { skill: "Cloud Computing", desc: "AWS/Azure deployment and scaling", icon: Cloud },
                { skill: "API Optimization", desc: "Performance tuning and best practices", icon: TrendingUp },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.skill} className="flex items-start gap-4 p-4 bg-muted rounded-lg hover:bg-accent/5 transition-colors">
                    <div className="p-2 bg-coral/10 rounded-lg flex-shrink-0">
                      <Icon className="text-coral" size={20} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-lg">{item.skill}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 card-shadow">
          <h3 className="text-2xl font-heading font-bold text-primary mb-8 flex items-center gap-3">
            <Calendar className="text-accent" size={28} />
            Lifelong Learning Roadmap
          </h3>
          
          <div className="space-y-8">
            {/* 6-Month Milestones */}
            {[
              {
                period: "Months 1-2",
                title: "Learn React.js Basics",
                tasks: [
                  "Complete React fundamentals course",
                  "Build 3 small component-based projects",
                  "Learn state management (hooks, context)",
                  "Practice responsive design patterns",
                ],
                color: "accent",
              },
              {
                period: "Months 3-4",
                title: "Build Full-Stack Application",
                tasks: [
                  "Design and plan a complete CRUD application",
                  "Integrate React frontend with PHP/Node backend",
                  "Implement user authentication and authorization",
                  "Deploy application to hosting service",
                ],
                color: "primary",
              },
              {
                period: "Months 5-6",
                title: "Deploy to Cloud Platform",
                tasks: [
                  "Learn AWS/Azure fundamentals",
                  "Set up cloud database and storage",
                  "Configure CI/CD pipeline for automatic deployment",
                  "Monitor performance and optimize costs",
                ],
                color: "coral",
              },
              {
                period: "Months 7-12",
                title: "Advanced Topics & Startup Preparation",
                tasks: [
                  "Study system design and scalability",
                  "Learn Docker and containerization",
                  "Research startup ideas and market validation",
                  "Build MVP for startup concept",
                ],
                color: "accent",
              },
            ].map((milestone, idx) => (
              <div key={idx} className="relative pl-12">
                <div className="absolute left-0 top-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                      milestone.color === "accent"
                        ? "bg-accent"
                        : milestone.color === "coral"
                        ? "bg-coral"
                        : "bg-primary"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  {idx < 3 && <div className="absolute left-4 top-8 w-0.5 h-full bg-gradient-to-b from-accent/50 to-transparent"></div>}
                </div>
                
                <div className="bg-muted rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                      milestone.color === "accent"
                        ? "bg-accent/20 text-accent"
                        : milestone.color === "coral"
                        ? "bg-coral/20 text-coral"
                        : "bg-primary/20 text-primary"
                    }`}>
                      {milestone.period}
                    </span>
                    <h4 className="text-xl font-heading font-bold text-primary">{milestone.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {milestone.tasks.map((task, tidx) => (
                      <li key={tidx} className="flex items-start gap-2 text-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          milestone.color === "accent"
                            ? "bg-accent"
                            : milestone.color === "coral"
                            ? "bg-coral"
                            : "bg-primary"
                        }`}></div>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-accent/10 to-coral/10 rounded-xl p-8 border border-accent/20 text-center">
          <h3 className="text-2xl font-heading font-bold text-primary mb-4">Commitment to Growth</h3>
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            I believe that continuous learning is the foundation of success in technology. By setting clear milestones 
            and maintaining consistent effort, I'm committed to transforming from a backend specialist into a versatile 
            full-stack developer capable of building complete solutions that make a positive impact.
          </p>
        </div>
      </div>
    </section>
  );
};
