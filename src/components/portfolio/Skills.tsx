import { Server, Database, Code } from "lucide-react";

export const Skills = () => {
  const skills = [
    {
      name: "Backend Development",
      level: 75,
      description: "Intermediate",
      learned: "Online courses & self-study",
      icon: Server,
      color: "accent",
    },
    {
      name: "Database Management",
      level: 70,
      description: "Intermediate",
      learned: "Online courses & college labs",
      icon: Database,
      color: "coral",
    },
    {
      name: "Python Programming",
      level: 85,
      description: "Advanced",
      learned: "College courses & personal projects",
      icon: Code,
      color: "primary",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Advanced Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-3xl mx-auto">
            Specialized competencies developed through continuous learning and practical application
          </p>
        </div>

        {/* Skill Progress Bars */}
        <div className="mb-16 bg-card rounded-xl p-8 card-shadow">
          <h3 className="text-2xl font-heading font-bold text-primary mb-8">Technical Proficiency</h3>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      skill.color === "accent"
                        ? "bg-accent"
                        : skill.color === "coral"
                        ? "bg-coral"
                        : "bg-primary"
                    }`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Skill Cards */}
        <div className="space-y-8">
          {/* Skill 1: Backend Development */}
          <div className="bg-card rounded-xl overflow-hidden card-shadow">
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-6 border-b">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Server className="text-accent" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary">Backend Development</h3>
                  <p className="text-muted-foreground">Level: Intermediate • Learned via Online Courses</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-heading font-bold text-lg mb-4">Code Artefacts</h4>
              <div className="space-y-4">
                <div className="bg-primary text-primary-foreground rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="text-xs text-primary-foreground/70 mb-2">// Authentication Middleware</div>
                  <pre>{`function authenticateUser($token) {
  $secret_key = getenv('JWT_SECRET');
  try {
    $decoded = JWT::decode($token, $secret_key);
    return $decoded->user_id;
  } catch (Exception $e) {
    return false;
  }
}`}</pre>
                </div>
                <div className="bg-primary text-primary-foreground rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="text-xs text-primary-foreground/70 mb-2">// API Route Handler</div>
                  <pre>{`// GET /api/books
function getBooks() {
  $query = "SELECT * FROM books 
            WHERE status = 'active' 
            ORDER BY created_at DESC";
  $result = mysqli_query($conn, $query);
  return json_encode(mysqli_fetch_all($result));
}`}</pre>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Core competencies: RESTful API design, authentication systems, database integration, error handling
              </p>
            </div>
          </div>

          {/* Skill 2: Database Management */}
          <div className="bg-card rounded-xl overflow-hidden card-shadow">
            <div className="bg-gradient-to-r from-coral/10 to-coral/5 p-6 border-b">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-coral/20 rounded-lg">
                  <Database className="text-coral" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary">Database Management</h3>
                  <p className="text-muted-foreground">Level: Intermediate • Learned via Courses & Labs</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-heading font-bold text-lg mb-4">SQL Artefacts & Schema Design</h4>
              <div className="space-y-4">
                <div className="bg-primary text-primary-foreground rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="text-xs text-primary-foreground/70 mb-2">-- User Authentication Table</div>
                  <pre>{`CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_username (username),
  INDEX idx_email (email)
);`}</pre>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h5 className="font-medium mb-2 text-coral">books table</h5>
                    <ul className="text-sm space-y-1">
                      <li>• book_id (PK)</li>
                      <li>• title, author</li>
                      <li>• category_id (FK)</li>
                      <li>• file_path</li>
                    </ul>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h5 className="font-medium mb-2 text-coral">categories table</h5>
                    <ul className="text-sm space-y-1">
                      <li>• category_id (PK)</li>
                      <li>• category_name</li>
                      <li>• description</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Core competencies: Relational database design, SQL optimization, indexing strategies, data normalization
              </p>
            </div>
          </div>

          {/* Skill 3: Python Programming */}
          <div className="bg-card rounded-xl overflow-hidden card-shadow">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Code className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary">Python Programming</h3>
                  <p className="text-muted-foreground">Level: Advanced • Learned via College & Projects</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-heading font-bold text-lg mb-4">Code Artefacts</h4>
              <div className="space-y-4">
                <div className="bg-primary text-primary-foreground rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <div className="text-xs text-primary-foreground/70 mb-2"># File Handling & Automation Script</div>
                  <pre>{`import os
import shutil
from datetime import datetime

def organize_files(directory):
    """Organize files by extension into folders"""
    for filename in os.listdir(directory):
        if os.path.isfile(os.path.join(directory, filename)):
            ext = filename.split('.')[-1]
            folder = os.path.join(directory, ext.upper())
            
            if not os.path.exists(folder):
                os.makedirs(folder)
            
            src = os.path.join(directory, filename)
            dst = os.path.join(folder, filename)
            shutil.move(src, dst)
    
    print(f"Files organized at {datetime.now()}")

# Usage
organize_files("./downloads")`}</pre>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h5 className="font-medium mb-2">Script Explanation</h5>
                  <p className="text-sm text-foreground leading-relaxed">
                    This automation script organizes files in a directory by their extensions. It scans all files, 
                    creates folders for each unique extension, and moves files accordingly. Demonstrates proficiency 
                    in file I/O operations, directory management, and practical automation using Python's standard library.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Core competencies: Data structures, algorithms, file handling, scripting, automation, problem-solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
