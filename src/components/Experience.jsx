import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    "Successfully completed a 6-week in-house summer training program titled 'Elevating Java: From Concepts to Code'.",
    "Strengthened fundamentals of Core Java including OOP concepts, exception handling, and collections.",
    "Worked with SQL and relational databases to design schemas and write queries for backend applications.",
    "Gained practical exposure to backend application flow and Java-based problem solving."
  ];

  return (
    <section id="experience" className="py-20 bg-primary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Training & <span className="text-accent">Experience</span></h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/40 backdrop-blur-md rounded-2xl border border-white/5 p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-accent/30 transition-colors">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-accent/10 transition-colors"></div>

            <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-text mb-2 flex items-center gap-2">
                  <Briefcase className="text-accent" size={24} /> 
                  Java Backend Development
                </h3>
                <h4 className="text-xl text-text-muted font-medium">Summer Training - Chandigarh University</h4>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <span className="inline-flex items-center gap-2 text-sm text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                  <Calendar size={16} /> May 2025 - June 2025
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-text-muted bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                  <MapPin size={16} /> Mohali, Punjab
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {responsibilities.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <p className="text-text-muted leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
