import { Lightbulb, Target, TrendingUp, Heart } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const Introduction = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section 
      ref={ref}
      id="introduction" 
      className={`section-padding bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Introduction & Learning Philosophy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Learning Journey */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                <Lightbulb className="text-accent" size={28} />
                My Learning Journey
              </h3>
              <p className="text-foreground leading-relaxed text-lg">
                From childhood, I was always curious about how things worked. I often opened my toys 
                completely, studied every part, and tried to reassemble them in new ways. This habit 
                of exploring and rebuilding objects developed my interest in technology and problem-solving. 
                Over time, this curiosity evolved into a passion for computers, engineering, and innovation. 
                Today, I continue to learn with the same enthusiasm, always eager to understand deeper and 
                build smarter solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-coral/10 rounded-xl p-8 border border-accent/20">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                <Target className="text-accent" size={28} />
                Learning Philosophy
              </h3>
              <p className="text-foreground leading-relaxed text-lg">
                I believe learning is a continuous process where every challenge is an opportunity to grow. 
                With a strong growth mindset, I embrace mistakes as stepping stones toward improvement. 
                My approach to learning is centered on solving real-world problems through logical thinking, 
                creativity, and persistence. Each new skill I develop is a tool that helps me tackle complex 
                challenges and innovate better solutions.
              </p>
            </div>
          </div>

          {/* Right Column - Values & Timeline */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                <Heart className="text-coral" size={28} />
                Core Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "💪", label: "Discipline" },
                  { icon: "🧩", label: "Problem-Solving" },
                  { icon: "✨", label: "Creativity" },
                  { icon: "🎯", label: "Hard Work" },
                ].map((value) => (
                  <div
                    key={value.label}
                    className="flex flex-col items-center text-center p-4 bg-muted rounded-lg hover:bg-accent/10 transition-colors"
                  >
                    <span className="text-4xl mb-2">{value.icon}</span>
                    <span className="font-medium text-foreground">{value.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                <TrendingUp className="text-accent" size={28} />
                Evolution Timeline
              </h3>
              <div className="space-y-6">
                {[
                  { stage: "Childhood", desc: "Curiosity & Exploration", year: "Early Years" },
                  { stage: "Discovery", desc: "Technology Fascination", year: "School" },
                  { stage: "Learning", desc: "Programming & Building", year: "University" },
                  { stage: "Innovation", desc: "Projects & Solutions", year: "Present" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-accent"></div>
                      {idx < 3 && <div className="w-0.5 h-full bg-accent/30 mt-2"></div>}
                    </div>
                    <div className="pb-6">
                      <div className="font-heading font-bold text-lg text-primary">{item.stage}</div>
                      <div className="text-foreground">{item.desc}</div>
                      <div className="text-sm text-muted-foreground">{item.year}</div>
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
