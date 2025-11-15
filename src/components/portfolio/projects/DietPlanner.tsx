import { Heart, TrendingUp, Calendar, AlertCircle, CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const DietPlanner = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section 
      ref={ref}
      id="diet-planner" 
      className={`section-padding bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Project Deep Dive: Diet Planner
          </h2>
          <div className="w-24 h-1 bg-coral rounded-full mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Overview */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Objective</h3>
              <p className="text-foreground leading-relaxed">
                To generate personalized diet plans based on health goals, enabling users to make informed nutritional 
                decisions tailored to their lifestyle, preferences, and wellness objectives.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Technologies Used</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "HTML" },
                  { name: "CSS" },
                  { name: "JavaScript" },
                  { name: "PHP" },
                  { name: "MySQL" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 p-3 bg-coral/10 rounded-lg">
                    <div className="w-2 h-2 bg-coral rounded-full"></div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Methodology</h3>
              <div className="space-y-3">
                {[
                  "User input form for health data collection",
                  "Nutrition database design and population",
                  "Backend recommendation engine development",
                  "Algorithm for personalized meal matching",
                  "Weekly plan generation system",
                  "Testing with various user profiles",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-coral text-white flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-foreground pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-coral/10 to-accent/10 rounded-xl p-6 border border-coral/20">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Key Innovations</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-coral flex-shrink-0 mt-1" size={20} />
                  <span>Smart recommendations based on lifestyle and dietary preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-coral flex-shrink-0 mt-1" size={20} />
                  <span>Nutrient balance checker ensuring complete nutrition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-coral flex-shrink-0 mt-1" size={20} />
                  <span>Weekly meal plan generator with variety rotation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Evidence & Reflection */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                <Heart className="text-coral" size={24} />
                Sample User Form
              </h3>
              <div className="bg-muted rounded-lg p-6 space-y-4">
                <div>
                  <label className="font-medium text-sm text-muted-foreground">Health Goal</label>
                  <div className="mt-1 p-3 bg-card rounded border">Weight Loss</div>
                </div>
                <div>
                  <label className="font-medium text-sm text-muted-foreground">Dietary Preference</label>
                  <div className="mt-1 p-3 bg-card rounded border">Vegetarian</div>
                </div>
                <div>
                  <label className="font-medium text-sm text-muted-foreground">Activity Level</label>
                  <div className="mt-1 p-3 bg-card rounded border">Moderate</div>
                </div>
                <div>
                  <label className="font-medium text-sm text-muted-foreground">Daily Calorie Target</label>
                  <div className="mt-1 p-3 bg-card rounded border">1800 kcal</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Screenshot placeholder</strong> — Replace with actual UI form screenshot
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                <Calendar className="text-coral" size={24} />
                Sample Meal Plan
              </h3>
              <div className="space-y-3">
                {[
                  { meal: "Breakfast", item: "Oatmeal with fruits & nuts", cal: "350 kcal" },
                  { meal: "Lunch", item: "Grilled vegetables with quinoa", cal: "500 kcal" },
                  { meal: "Snack", item: "Greek yogurt with berries", cal: "200 kcal" },
                  { meal: "Dinner", item: "Lentil soup with whole wheat bread", cal: "450 kcal" },
                ].map((meal, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-coral/5 rounded-lg border border-coral/20">
                    <div>
                      <p className="font-medium text-coral">{meal.meal}</p>
                      <p className="text-sm text-foreground">{meal.item}</p>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{meal.cal}</span>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-coral text-white rounded-lg text-center font-medium">
                  Total: 1,500 kcal (Target: 1,800 kcal)
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                <TrendingUp className="text-coral" size={24} />
                Algorithm Flowchart
              </h3>
              <div className="bg-muted rounded-lg p-6">
                <div className="space-y-3">
                  <div className="bg-coral/20 border-2 border-coral rounded-lg p-3 text-center text-sm font-medium">
                    User Input (Goals, Preferences, Activity)
                  </div>
                  <div className="flex justify-center"><div className="w-0.5 h-6 bg-coral"></div></div>
                  <div className="bg-accent/20 border-2 border-accent rounded-lg p-3 text-center text-sm font-medium">
                    Calculate Daily Calorie Needs
                  </div>
                  <div className="flex justify-center"><div className="w-0.5 h-6 bg-coral"></div></div>
                  <div className="bg-primary/20 border-2 border-primary rounded-lg p-3 text-center text-sm font-medium">
                    Query Nutrition Database
                  </div>
                  <div className="flex justify-center"><div className="w-0.5 h-6 bg-coral"></div></div>
                  <div className="bg-coral/20 border-2 border-coral rounded-lg p-3 text-center text-sm font-medium">
                    Generate Weekly Meal Plan
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                <AlertCircle className="text-coral" size={24} />
                Challenges & Solutions
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-coral pl-4">
                  <p className="font-medium text-coral mb-1">Challenge: Nutritional Data Reliability</p>
                  <p className="text-foreground">Used verified datasets from trusted sources and cross-referenced nutrition values</p>
                </div>
                <div className="border-l-4 border-coral pl-4">
                  <p className="font-medium text-coral mb-1">Challenge: Calorie Calculation Accuracy</p>
                  <p className="text-foreground">Implemented standard health guidelines (Harris-Benedict equation) for precise calculations</p>
                </div>
                <div className="border-l-4 border-coral pl-4">
                  <p className="font-medium text-coral mb-1">Challenge: Meal Variety & Balance</p>
                  <p className="text-foreground">Refined algorithms to ensure diverse food groups and prevent meal repetition</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Outcome & Learning</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Created a functional prototype that successfully recommends personalized meals using user health data. 
                The system demonstrates practical application of nutrition science combined with algorithmic thinking 
                to solve real wellness challenges.
              </p>
              <div className="bg-coral/10 rounded-lg p-4">
                <p className="text-sm font-medium text-coral">
                  💡 Key Learning: The complexity of balancing multiple nutritional factors while maintaining 
                  user preferences and the importance of using credible data sources in health applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
