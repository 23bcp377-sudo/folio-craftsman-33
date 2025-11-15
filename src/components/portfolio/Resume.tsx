import { GraduationCap, Code, Database, Award, Users, Heart } from "lucide-react";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const Resume = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section 
      ref={ref}
      id="resume" 
      className={`section-padding bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Resume / CV
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary">Education</h3>
                </div>
              </div>
              <div className="pl-16">
                <p className="font-medium text-lg">B.Tech in Computer Science</p>
                <p className="text-muted-foreground">Pandit Deendayal Energy University</p>
                <p className="text-sm text-muted-foreground mt-1">3rd Year (Currently Pursuing)</p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Code className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary">Technical Skills</h3>
                </div>
              </div>
              <div className="pl-16 space-y-4">
                <div>
                  <p className="font-medium mb-2">Programming:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Java", "C", "C++", "JavaScript"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Web Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "PHP"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Tools & Others:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "VS Code", "SQL"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Database className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary">Databases</h3>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-foreground">MySQL</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Experienced in database design, queries, and optimization
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary">Soft Skills</h3>
                </div>
              </div>
              <div className="pl-16">
                <ul className="space-y-2">
                  {["Teamwork", "Time Management", "Problem-Solving"].map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-coral/10 rounded-lg">
                  <Award className="text-coral" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary">Certifications</h3>
                </div>
              </div>
              <div className="pl-16 space-y-3">
                {[
                  { name: "Python Basics", provider: "Great Learning" },
                  { name: "Introduction to Web Development", provider: "Coursera" },
                  { name: "Java Fundamentals", provider: "NPTEL" },
                  { name: "MySQL for Beginners", provider: "Udemy" },
                ].map((cert, idx) => (
                  <div key={idx} className="border-l-2 border-coral pl-4 py-2">
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-coral/10 rounded-lg">
                  <Heart className="text-coral" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary">Volunteer Experience</h3>
                </div>
              </div>
              <div className="pl-16">
                <p className="font-medium">Community Service Initiative (CSSI)</p>
                <p className="text-foreground mt-2">
                  Participated in rural community service activities including teaching support and awareness programs
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-coral/10 rounded-lg">
                  <Award className="text-coral" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary">Co-curricular Activities</h3>
                </div>
              </div>
              <div className="pl-16 space-y-2">
                <p className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-coral rounded-full"></div>
                  <span>Hackathon Participation</span>
                </p>
                <p className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-coral rounded-full"></div>
                  <span>Cultural Activities</span>
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-coral/10 rounded-xl p-6 border border-accent/20">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Area of Interest</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium text-foreground">Web Development</p>
                <p className="text-accent font-medium">Specialization: Backend Development</p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Hobbies</h3>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-muted rounded-lg">📺 Watching tech videos</span>
                <span className="px-4 py-2 bg-muted rounded-lg">🎮 Gaming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
