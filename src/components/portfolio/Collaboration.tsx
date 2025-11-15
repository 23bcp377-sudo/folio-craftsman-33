import { Users, Code, Database, Target, Award } from "lucide-react";

export const Collaboration = () => {
  return (
    <section id="collaboration" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Collaboration & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
            Demonstrated teamwork and technical leadership in competitive hackathon environment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl p-8 card-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-accent/10 rounded-xl">
                <Users className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary">Hackathon Experience</h3>
                <p className="text-muted-foreground">Team Project · Competitive Environment</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-heading font-bold text-lg mb-2">My Role</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-lg">
                    Backend Developer
                  </span>
                  <span className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-lg">
                    Database Manager
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-2">Team Photo</h4>
                <div className="bg-muted rounded-lg p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="mx-auto text-muted-foreground mb-2" size={48} />
                    <p className="text-muted-foreground">Team Photo Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Team Dynamics</h3>
              <p className="text-foreground leading-relaxed">
                Our team operated with a clear division of responsibilities based on individual strengths. 
                We maintained constant communication through regular stand-ups and used collaborative debugging 
                when challenges arose. This approach ensured smooth integration and efficient problem-solving.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Conflict Handling</h3>
              <p className="text-foreground leading-relaxed">
                During development, we encountered technical disagreements about implementation approaches. 
                We resolved these by staying focused on project goals, encouraging calm discussions where 
                each team member could present their reasoning, and providing mutual support in decision-making.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-coral/10 rounded-xl p-6 border border-accent/20">
              <h3 className="text-xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                <Award className="text-coral" size={24} />
                Key Achievements
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Completed project within tight deadline constraints</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Delivered a fully functional working prototype</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Received positive feedback from judges on technical implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-card rounded-xl p-8 card-shadow">
          <h3 className="text-2xl font-heading font-bold text-primary mb-8 text-center">Project Timeline</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                phase: "Planning",
                icon: Target,
                tasks: ["Requirements analysis", "Task distribution", "Tech stack decision"],
                color: "accent",
              },
              {
                phase: "Backend Setup",
                icon: Database,
                tasks: ["Database schema", "API endpoints", "Authentication"],
                color: "primary",
              },
              {
                phase: "Integration",
                icon: Code,
                tasks: ["Frontend-backend sync", "Testing", "Bug fixes"],
                color: "coral",
              },
              {
                phase: "Presentation",
                icon: Award,
                tasks: ["Demo preparation", "Documentation", "Judge review"],
                color: "accent",
              },
            ].map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div key={idx} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`p-4 rounded-xl mb-4 ${
                        stage.color === "accent"
                          ? "bg-accent/10"
                          : stage.color === "coral"
                          ? "bg-coral/10"
                          : "bg-primary/10"
                      }`}
                    >
                      <Icon
                        className={
                          stage.color === "accent"
                            ? "text-accent"
                            : stage.color === "coral"
                            ? "text-coral"
                            : "text-primary"
                        }
                        size={32}
                      />
                    </div>
                    <h4 className="font-heading font-bold text-lg mb-3">{stage.phase}</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {stage.tasks.map((task, tidx) => (
                        <li key={tidx}>• {task}</li>
                      ))}
                    </ul>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
