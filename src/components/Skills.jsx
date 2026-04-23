import React from 'react';
import { Database, Server, Terminal, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="text-accent mb-4" size={32} />,
      skills: ["Java", "SQL", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Backend & Systems",
      icon: <Server className="text-blue-400 mb-4" size={32} />,
      skills: ["Spring Boot (Basics)", "JDBC", "REST APIs", "JWT Authentication"]
    },
    {
      title: "Core Computer Science",
      icon: <Layers className="text-emerald-400 mb-4" size={32} />,
      skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems"]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="text-purple-400 mb-4" size={32} />,
      skills: ["MySQL", "Git", "GitHub", "VS Code", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-accent">Skills</span></h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-secondary/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)] hover:border-accent/30"
            >
              <div className="flex justify-center">{category.icon}</div>
              <h3 className="text-xl font-bold text-center mb-6 text-text">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-primary px-3 py-1.5 rounded-lg text-sm text-text-muted border border-white/5 hover:text-accent hover:border-accent/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
