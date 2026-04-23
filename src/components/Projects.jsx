import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Campus Cache",
      subtitle: "Academic Collaboration Platform",
      year: "2025",
      tech: ["Java", "Spring Boot", "MySQL", "JWT"],
      description: [
        "Designed and developed RESTful APIs for posts and comments using a clean layered architecture.",
        "Implemented secure authentication and authorization using JWT and BCrypt password encryption.",
        "Modeled real-world relationships using relational database design and JPA mappings.",
        "Applied pagination, DTOs, and centralized error handling to manage real-world edge cases.",
        "Tested APIs for correctness, performance, and authorization failures using Postman."
      ]
    },
    {
      title: "Student Management System",
      subtitle: "Backend-driven System",
      year: "2025",
      tech: ["Java", "JDBC", "MySQL"],
      description: [
        "Developed a backend-driven system to manage students, courses, and enrollment records.",
        "Implemented CRUD operations using JDBC with proper relational schema design.",
        "Wrote optimized SQL queries using joins and subqueries to ensure data integrity.",
        "Applied object-oriented design principles and structured application flow."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-secondary/30 rounded-2xl p-8 border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(56,189,248,0.1)] flex flex-col h-full relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex justify-between items-start mb-6 z-10">
                <div className="p-3 bg-primary rounded-xl text-accent border border-white/5 group-hover:border-accent/30 transition-colors">
                  <Folder size={28} />
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="GitHub">
                    <FaGithub size={22} />
                  </a>
                  <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="External Link">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              <div className="z-10 flex-grow">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors">{project.title}</h3>
                  <span className="text-sm font-medium text-text-muted">{project.year}</span>
                </div>
                <h4 className="text-sm text-accent mb-4 font-medium tracking-wide">{project.subtitle}</h4>
                
                <ul className="space-y-3 mb-8">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-text-muted text-sm flex gap-2 items-start">
                      <span className="text-accent text-xs mt-1">▹</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto z-10 pt-6 border-t border-white/5">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-text-muted bg-primary px-2 py-1 rounded">
                    {tech}
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

export default Projects;
