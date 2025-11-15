import { Database, Shield, Search, Upload, AlertCircle, CheckCircle } from "lucide-react";

export const VirtualLibrary = () => {
  return (
    <section id="virtual-library" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Project Deep Dive: Virtual Library
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Overview */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Objective</h3>
              <p className="text-foreground leading-relaxed">
                To help students access digital books through an online platform, democratizing educational resources 
                and enabling remote learning capabilities.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Technologies Used</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "HTML", color: "accent" },
                  { name: "CSS", color: "accent" },
                  { name: "JavaScript", color: "accent" },
                  { name: "PHP", color: "accent" },
                  { name: "MySQL", color: "accent" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Methodology</h3>
              <div className="space-y-3">
                {[
                  "System design and architecture planning",
                  "PHP backend development with MySQL integration",
                  "User authentication and authorization system",
                  "Search and browse functionality",
                  "Admin panel for content management",
                  "Testing and quality assurance",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-foreground pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Key Innovations</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>Minimal UI design for improved user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>Integrated PDF reader for seamless book viewing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span>Admin upload panel with category organization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Evidence & Reflection */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                <Database className="text-accent" size={24} />
                Architecture Diagram
              </h3>
              <div className="bg-muted rounded-lg p-8">
                <div className="space-y-4">
                  <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 text-center font-medium">
                    User Interface (HTML/CSS/JS)
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-accent"></div>
                  </div>
                  <div className="bg-primary/20 border-2 border-primary rounded-lg p-4 text-center font-medium">
                    PHP Backend (Authentication, API Routes)
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-accent"></div>
                  </div>
                  <div className="bg-coral/20 border-2 border-coral rounded-lg p-4 text-center font-medium">
                    MySQL Database (Users, Books, Categories)
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Code Snippet</h3>
              <div className="bg-primary text-primary-foreground rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>{`// User Authentication Route
function authenticateUser($username, $password) {
  $query = "SELECT * FROM users 
            WHERE username = ? 
            AND password = ?";
  $stmt = $conn->prepare($query);
  $hashed_pwd = hash('sha256', $password);
  $stmt->bind_param("ss", $username, $hashed_pwd);
  $stmt->execute();
  return $stmt->get_result();
}`}</pre>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Note:</strong> Screenshot placeholder — Replace with actual code from implementation
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                <AlertCircle className="text-coral" size={24} />
                Challenges & Solutions
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-coral pl-4">
                  <p className="font-medium text-coral mb-1">Challenge: Frontend-Database Connectivity</p>
                  <p className="text-foreground">Optimized database queries and implemented proper error handling for stable connections</p>
                </div>
                <div className="border-l-4 border-coral pl-4">
                  <p className="font-medium text-coral mb-1">Challenge: Authentication Instability</p>
                  <p className="text-foreground">Implemented secure password hashing (SHA-256) and robust input validation</p>
                </div>
                <div className="border-l-4 border-coral pl-4">
                  <p className="font-medium text-coral mb-1">Challenge: Large File Handling</p>
                  <p className="text-foreground">Compressed PDFs and organized storage structure for efficient file management</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Outcome & Learning</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Successfully developed a working prototype demonstrating digital library access for academics. 
                The project validated the concept of online book distribution and taught valuable lessons about 
                full-stack development, database optimization, and user-centric design.
              </p>
              <div className="bg-accent/10 rounded-lg p-4">
                <p className="text-sm font-medium text-accent">
                  💡 Key Learning: The importance of security in user authentication systems and the balance 
                  between functionality and performance when handling large files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
