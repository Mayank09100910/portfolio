import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';

// ✅ FIX: import image
import profile from "../assets/image.jpeg";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2
      });

      gsap.from(".hero-btn", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden" ref={containerRef}>
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div className="flex flex-col items-start z-10">
          
          <div className="hero-text inline-block py-1 px-3 rounded-full bg-secondary text-accent text-sm font-medium mb-6 border border-accent/20 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            Associate Software Engineer
          </div>

          <h1 className="hero-text text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Mayank Madan</span>
          </h1>

          <p className="hero-text text-lg md:text-xl text-text-muted mb-8 max-w-lg leading-relaxed">
            Computer Science Engineering student with a strong foundation in Data Structures, Algorithms, and Backend Development.
          </p>

          {/* ✅ BUTTONS */}
          <div className="flex flex-wrap gap-4">
            
            <a href="#projects" className="hero-btn group px-6 py-3 bg-accent text-primary rounded-lg flex items-center gap-2 hover:scale-105 transition">
              View Projects <ArrowRight size={18} />
            </a>

            <a href="#contact" className="hero-btn px-6 py-3 bg-secondary rounded-lg border">
              Contact Me
            </a>

            {/* 🔥 ADDED RESUME BUTTON */}
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn px-6 py-3 bg-secondary text-text font-semibold rounded-lg border border-white/10 hover:border-accent/30 transition-all duration-300 hover:scale-105"
            >
              Resume
            </a>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 mt-12 hero-text">

            <a 
              href="https://github.com/Mayank09100910" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition hover:-translate-y-1"
            >
              <FaGithub size={24} />
            </a>

            <a 
              href="https://www.linkedin.com/in/mayankmadan09/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition hover:-translate-y-1"
            >
              <FaLinkedin size={24} />
            </a>

            <a 
              href="mailto:mayankmadan2602@gmail.com"
              className="text-text-muted hover:text-accent transition hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative z-10 flex justify-center hero-text perspective-1000">
          <div className="w-full max-w-lg relative">

            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl blur-3xl -z-10 animate-pulse"></div>

            <div className="bg-secondary/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-y-12 hover:rotate-x-12 preserve-3d">
              
              <img 
                src={profile} 
                alt="Mayank"
                className="w-full h-auto object-cover rounded-2xl shadow-xl animate-float"
              />

            </div>
          </div>
        </div>

      </div>

      {/* FLOAT ANIMATION */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;