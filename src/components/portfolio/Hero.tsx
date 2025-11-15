import { Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bS0yMCAwdjJoMlYzNGgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              Portfolio
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Pradhyumansinh Chauhan
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-white/90">
                B.Tech in Computer Science — 3rd Year
              </p>
              <p className="text-lg text-white/80">
                Pandit Deendayal Energy University
              </p>
            </div>
            
            <p className="text-2xl md:text-3xl font-heading font-medium text-white/95 italic">
              "Innovating Ideas Through Code and Curiosity"
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-medium"
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-medium"
                onClick={() => window.print()}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 card-elevated max-w-md w-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-6xl font-bold">
                  PC
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-primary">
                    Profile Photo
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Placeholder — Replace with profile link
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  {["Discipline", "Problem-Solving", "Creativity", "Hard Work"].map((value) => (
                    <span
                      key={value}
                      className="px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
