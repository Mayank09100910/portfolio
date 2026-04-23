import React from 'react';
import { GraduationCap, Code2, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-accent">Me</span></h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
          <p className="text-text-muted max-w-3xl text-lg leading-relaxed">
            I am a Computer Science Engineering student with strong problem-solving skills and a solid foundation in Data Structures, Algorithms, and Object-Oriented Programming. I am seeking an Associate Software Engineer role to build efficient, scalable software systems and contribute to fast-paced product development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Education Timeline */}
          <div className="bg-secondary/30 p-8 rounded-2xl border border-white/5 shadow-xl hover:border-accent/30 transition-colors">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-accent" /> Education
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-white/10 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-primary bg-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-accent/50 z-10"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-secondary/50 border border-white/5 hover:border-accent/50 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-lg text-text">Chandigarh University</h4>
                    <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded">2023 - 2027</span>
                  </div>
                  <p className="text-sm text-text-muted mb-2">Bachelor of Engineering in Computer Science and Engineering</p>
                  <p className="text-sm font-semibold text-text">CGPA: 7.35</p>
                  <p className="text-xs text-text-muted mt-2">Mohali, Punjab</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-primary bg-accent/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-secondary/50 border border-white/5 hover:border-accent/50 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-lg text-text">S.R.S. Public School</h4>
                    <span className="text-xs text-text-muted font-medium bg-white/5 px-2 py-1 rounded">2022 - 2023</span>
                  </div>
                  <p className="text-sm text-text-muted mb-2">Senior Secondary (Class XII)</p>
                  <p className="text-sm font-semibold text-text">84.6%</p>
                  <p className="text-xs text-text-muted mt-2">Rohtak, Haryana</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-primary bg-accent/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-secondary/50 border border-white/5 hover:border-accent/50 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-lg text-text">S.R.S. Public School</h4>
                    <span className="text-xs text-text-muted font-medium bg-white/5 px-2 py-1 rounded">2020 - 2021</span>
                  </div>
                  <p className="text-sm text-text-muted mb-2">Secondary (Class X)</p>
                  <p className="text-sm font-semibold text-text">83.8%</p>
                  <p className="text-xs text-text-muted mt-2">Rohtak, Haryana</p>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Highlights */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-secondary/50 to-primary p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group">
              <Code2 className="text-accent w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Competitive Programming</h3>
              <p className="text-text-muted">Achieved Pupil rating on Codeforces and 2-star rating on CodeChef. Solved 300+ DSA problems across various platforms.</p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/50 to-primary p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group">
              <BookOpen className="text-blue-400 w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Backend Focus</h3>
              <p className="text-text-muted">Specialized in Java Backend Development, Spring Boot, REST APIs, and database design. Passionate about system architecture.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
