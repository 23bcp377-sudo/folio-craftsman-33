import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Let's Connect
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                I'm always interested in discussing new opportunities, collaborative projects, 
                or innovative ideas in technology. Feel free to reach out!
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm border border-primary-foreground/20">
              <div className="p-3 bg-accent rounded-lg">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70">Email</p>
                <a
                  href="mailto:pradhyumansinh006@gmail.com"
                  className="font-medium text-lg hover:text-accent transition-colors"
                >
                  pradhyumansinh006@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-primary-foreground/70 font-medium">
                Connect on social platforms:
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" size={20} />
                    LinkedIn
                    <ExternalLink className="ml-auto" size={16} />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={20} />
                    GitHub
                    <ExternalLink className="ml-auto" size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-4">Quick Links</h3>
              <p className="text-primary-foreground/80 mb-6">
                Navigate to key sections of the portfolio
              </p>
              <div className="space-y-3">
                {["projects", "skills", "resume"].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      const element = document.getElementById(section);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full px-4 py-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 rounded-lg text-left font-medium capitalize transition-all"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <div>
              <p className="font-medium text-primary-foreground">Pradhyumansinh Chauhan</p>
              <p>B.Tech Computer Science • Pandit Deendayal Energy University</p>
            </div>
            <div className="text-center md:text-right">
              <p>Digital Portfolio {new Date().getFullYear()}</p>
              <p className="text-xs mt-1">Built with React, TypeScript & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
