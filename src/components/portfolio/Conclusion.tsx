import { Award, TrendingUp, Target, BarChart } from "lucide-react";

export const Conclusion = () => {
  const swotData = {
    strengths: [
      "Strong problem-solving abilities",
      "Quick learner with adaptability",
      "Solid backend development skills",
      "Team collaboration experience",
    ],
    weaknesses: [
      "Limited frontend design experience",
      "Need to improve public speaking",
      "Less exposure to large-scale systems",
      "Communication skills can be enhanced",
    ],
    opportunities: [
      "Growing demand for full-stack developers",
      "Emerging tech startup ecosystem",
      "Remote work and global opportunities",
      "Open-source contribution platforms",
    ],
    threats: [
      "Rapid technology changes requiring constant learning",
      "High competition in tech job market",
      "Economic uncertainties affecting startups",
      "Need to balance academics with skill development",
    ],
  };

  return (
    <section id="conclusion" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Conclusion & Self-Assessment
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                <Award className="text-accent" size={28} />
                Top Achievements
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Virtual Library Project",
                    desc: "Developed complete digital book platform with authentication",
                    icon: "📚",
                  },
                  {
                    title: "Diet Planner System",
                    desc: "Created personalized nutrition recommendation engine",
                    icon: "🥗",
                  },
                  {
                    title: "Hackathon Participation",
                    desc: "Successfully collaborated in competitive team environment",
                    icon: "🏆",
                  },
                  {
                    title: "Technical Certifications",
                    desc: "Completed 4+ certifications in web development and programming",
                    icon: "🎓",
                  },
                ].map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="text-3xl flex-shrink-0">{achievement.icon}</div>
                    <div>
                      <p className="font-heading font-bold text-lg">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                <TrendingUp className="text-coral" size={28} />
                Areas for Improvement
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-coral pl-4 py-2">
                  <p className="font-medium">Frontend Design Skills</p>
                  <p className="text-sm text-muted-foreground">Need to develop stronger UI/UX design capabilities and modern framework proficiency</p>
                </div>
                <div className="border-l-4 border-coral pl-4 py-2">
                  <p className="font-medium">Communication Skills</p>
                  <p className="text-sm text-muted-foreground">Working on articulating technical concepts more effectively to non-technical audiences</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8 border border-accent/20">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Self-Reflection</h3>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Throughout my academic journey, I've grown from a curious child dismantling toys to a dedicated 
                  computer science student building functional applications.
                </p>
                <p>
                  My projects have taught me that technical skills alone aren't enough—ethical responsibility, 
                  user empathy, and continuous learning are equally important.
                </p>
                <p>
                  The challenges I've faced, from authentication bugs to team coordination, have strengthened my 
                  problem-solving abilities and resilience.
                </p>
                <p>
                  I recognize my areas for growth and am committed to becoming not just a better developer, 
                  but a more well-rounded technology professional ready to make meaningful contributions to the field.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - SWOT */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                <Target className="text-accent" size={28} />
                SWOT Analysis
              </h3>
              
              <div className="space-y-6">
                {/* Strengths */}
                <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                  <h4 className="font-heading font-bold text-lg text-accent mb-3 flex items-center gap-2">
                    💪 Strengths
                  </h4>
                  <ul className="space-y-2">
                    {swotData.strengths.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="bg-coral/10 rounded-lg p-6 border border-coral/20">
                  <h4 className="font-heading font-bold text-lg text-coral mb-3 flex items-center gap-2">
                    🔧 Weaknesses
                  </h4>
                  <ul className="space-y-2">
                    {swotData.weaknesses.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-coral rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Opportunities */}
                <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                  <h4 className="font-heading font-bold text-lg text-primary mb-3 flex items-center gap-2">
                    🚀 Opportunities
                  </h4>
                  <ul className="space-y-2">
                    {swotData.opportunities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Threats */}
                <div className="bg-muted rounded-lg p-6 border">
                  <h4 className="font-heading font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                    ⚠️ Threats
                  </h4>
                  <ul className="space-y-2">
                    {swotData.threats.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Radar */}
            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                <BarChart className="text-accent" size={28} />
                Skills & Confidence Levels
              </h3>
              <div className="space-y-4">
                {[
                  { skill: "Backend Development", level: 85 },
                  { skill: "Database Management", level: 80 },
                  { skill: "Problem Solving", level: 90 },
                  { skill: "Team Collaboration", level: 75 },
                  { skill: "Frontend Development", level: 60 },
                  { skill: "Communication", level: 65 },
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{item.skill}</span>
                      <span className="text-sm text-muted-foreground">{item.level}%</span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-coral rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
