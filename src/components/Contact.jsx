import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">

      {/* Background effect */}
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>

          <p className="text-text-muted max-w-xl text-lg">
            🚀 Open for Internship & Backend Developer Roles.  
            Feel free to connect with me anytime!
          </p>
        </div>

        {/* CENTERED CONTACT CARD */}
        <div className="flex justify-center">
          
          <div className="w-full max-w-xl space-y-8">

            {/* Email */}
            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-secondary rounded-xl text-accent border border-white/5 group-hover:border-accent/30 group-hover:bg-accent/10 transition">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Email</h4>
                <a href="mailto:mayankmadan2602@gmail.com" className="text-text-muted hover:text-accent transition">
                  mayankmadan2602@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-secondary rounded-xl text-accent border border-white/5 group-hover:border-accent/30 group-hover:bg-accent/10 transition">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Phone</h4>
                <a href="tel:+919416464643" className="text-text-muted hover:text-accent transition">
                  +91-9416464643
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 group">
              <div className="p-4 bg-secondary rounded-xl text-accent border border-white/5 group-hover:border-accent/30 group-hover:bg-accent/10 transition">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Location</h4>
                <p className="text-text-muted">
                  Chandigarh University <br /> Mohali, Punjab
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8 border-t border-white/10 flex justify-center gap-5">

              <a 
                href="https://github.com/Mayank09100910" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-accent/30"
              >
                <FaGithub size={20} />
              </a>

              <a 
                href="https://www.linkedin.com/in/mayankmadan09/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-accent/30"
              >
                <FaLinkedin size={20} />
              </a>

              <a 
                href="https://codolio.com/profile/Mayank0910" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-text-muted hover:text-accent hover:-translate-y-1 transition-all duration-300 border border-white/5 hover:border-accent/30 flex items-center justify-center font-bold text-sm w-[46px]"
              >
                C
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;