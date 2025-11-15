import { Shield, Lock, Eye, CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const Ethics = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section 
      ref={ref}
      id="ethics" 
      className={`section-padding bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Global Awareness & Ethics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
            Promoting health innovation while maintaining ethical responsibility in technology development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-3">
                <Shield className="text-accent" size={28} />
                Theme & Influence
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-lg mb-2">Project Theme</h4>
                  <p className="text-foreground leading-relaxed">
                    The Diet Planner project focuses on promoting healthy lifestyles through technology. 
                    By providing personalized nutrition guidance, it addresses global health challenges 
                    like obesity and poor dietary habits while empowering users to make informed decisions 
                    about their wellness.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Ethical Considerations</h4>
                  <p className="text-foreground leading-relaxed">
                    Throughout development, we balanced innovative health features with ethical data handling 
                    practices. All user health information is treated with strict confidentiality, and the 
                    system is designed to provide guidance rather than medical advice, encouraging users to 
                    consult healthcare professionals for serious health concerns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8 border border-accent/20">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Personal Reflection</h3>
              <blockquote className="text-foreground leading-relaxed italic border-l-4 border-accent pl-4">
                "Every developer carries responsibility for user trust and data privacy. Building the Diet Planner 
                taught me that technology isn't just about functionality—it's about respecting users and protecting 
                their sensitive information. Ethical development means considering the impact of every feature and 
                ensuring our code upholds the highest standards of security and transparency."
              </blockquote>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                <Lock className="text-coral" size={28} />
                Case Study: Data Handling in Diet Planner
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-heading font-bold mb-3 flex items-center gap-2">
                    <Eye className="text-accent" size={20} />
                    Data Collection
                  </h4>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Fields Collected:</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Basic info (age, gender) for calorie calculation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Health goals (weight management, fitness)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Dietary preferences (vegetarian, allergies)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>Activity level for personalized recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-bold mb-3 flex items-center gap-2">
                    <Lock className="text-coral" size={20} />
                    Security Measures
                  </h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-coral pl-4 py-2">
                      <p className="font-medium text-sm mb-1">Password Encryption</p>
                      <p className="text-sm text-foreground">SHA-256 hashing for all user credentials</p>
                    </div>
                    <div className="border-l-4 border-coral pl-4 py-2">
                      <p className="font-medium text-sm mb-1">Data Retention Policy</p>
                      <p className="text-sm text-foreground">User data stored only as long as account is active</p>
                    </div>
                    <div className="border-l-4 border-coral pl-4 py-2">
                      <p className="font-medium text-sm mb-1">Input Validation</p>
                      <p className="text-sm text-foreground">Sanitization to prevent SQL injection attacks</p>
                    </div>
                    <div className="border-l-4 border-coral pl-4 py-2">
                      <p className="font-medium text-sm mb-1">Access Control</p>
                      <p className="text-sm text-foreground">Session-based authentication with timeout</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-bold mb-3">User Privacy Commitments</h4>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>No sharing of health data with third parties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Users can request data deletion at any time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Transparent privacy policy accessible to all users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>Regular security audits and updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
