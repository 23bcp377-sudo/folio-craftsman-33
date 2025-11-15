import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Prof. R. Sharma",
      role: "Computer Science Faculty",
      institution: "PDEU",
      quote: "Pradhyumansinh demonstrates exceptional problem-solving abilities and a genuine passion for learning. His Virtual Library project showcased not just technical skills, but also his understanding of real-world application needs. He consistently asks thoughtful questions and helps his peers understand complex concepts.",
      initials: "RS",
      color: "accent",
    },
    {
      name: "Harsh Patel",
      role: "Senior Student",
      institution: "B.Tech CS, 4th Year",
      quote: "Working with Pradhyumansinh on various assignments has been great. He approaches every problem methodically and isn't afraid to experiment with new solutions. His backend code is clean and well-documented, making collaboration smooth. He's someone you can rely on in team projects.",
      initials: "HP",
      color: "primary",
    },
    {
      name: "Aman Gupta",
      role: "Hackathon Teammate",
      institution: "B.Tech CS",
      quote: "During our hackathon, Pradhyumansinh handled the backend and database with impressive efficiency. Even under time pressure, he kept calm, communicated clearly, and delivered quality work. His ability to debug quickly and support team members made a huge difference in completing our project successfully.",
      initials: "AG",
      color: "coral",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
            What mentors, peers, and collaborators say about my work and character
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-8 card-shadow hover:card-elevated transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold ${
                    testimonial.color === "accent"
                      ? "bg-accent"
                      : testimonial.color === "coral"
                      ? "bg-coral"
                      : "bg-primary"
                  }`}
                >
                  {testimonial.initials}
                </div>
                <Quote
                  className={`${
                    testimonial.color === "accent"
                      ? "text-accent"
                      : testimonial.color === "coral"
                      ? "text-coral"
                      : "text-primary"
                  } opacity-20 group-hover:opacity-40 transition-opacity`}
                  size={32}
                />
              </div>

              <blockquote className="text-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t pt-4">
                <p className="font-heading font-bold text-lg text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.institution}</p>
              </div>

              <div className="text-xs text-muted-foreground mt-4 italic">
                Photo placeholder — Replace with provided image
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
