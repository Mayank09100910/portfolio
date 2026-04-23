import React from 'react';
import { Trophy, Star, Award, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="text-yellow-400 w-8 h-8" />,
      title: "Codeforces Pupil Rating",
      description: "Demonstrating strong competitive programming skills and algorithmic thinking."
    },
    {
      icon: <Star className="text-blue-400 w-8 h-8" />,
      title: "CodeChef 2-Star Rating",
      description: "Consistent problem-solving and logic building on a competitive platform."
    },
    {
      icon: <Award className="text-emerald-400 w-8 h-8" />,
      title: "300+ DSA Problems Solved",
      description: "Solved numerous Data Structures and Algorithms problems using Java on platforms like LeetCode and Codeforces."
    },
    {
      icon: <Medal className="text-purple-400 w-8 h-8" />,
      title: "Certifications",
      description: "Elevating Java (Chandigarh University), Cloud Computing (NPTEL - IIT Kharagpur), DSA with Java (Apna College)."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-primary/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & <span className="text-accent">Certifications</span></h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="bg-secondary/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-accent/30 hover:bg-secondary/80 transition-all duration-300 group hover:-translate-y-2 text-center flex flex-col items-center"
            >
              <div className="mb-6 p-4 bg-primary/50 rounded-full inline-block border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
