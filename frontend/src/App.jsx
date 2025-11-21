import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import ContactForm from './components/ContactForm';
import GallerySection from './components/GallerySection';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ExperienceSection />
      <ContactForm />
      
      {/* Footer elegante */}
      <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden border-t border-[#d02894]/30">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d02894]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                AD<span className="text-[#d02894]">MUSIC</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                DJ & Music Planner professionista per eventi, matrimoni e feste aziendali.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#d02894]">Link Rapidi</h4>
              <ul className="space-y-2">
                {['Chi Sono', 'Servizi', 'Gallery', 'Esperienza', 'Contatti'].map((link, index) => (
                  <li key={index}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[#d02894] transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contatti */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#d02894]">Contatti</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4 text-[#d02894]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@admusic.it
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4 text-[#d02894]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +39 333 123 4567
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} <span className="text-[#d02894] font-semibold">ADMUSIC</span> - Andrea D'Aguì. Tutti i diritti riservati.
              </p>
              
              {/* Social Links (placeholder) */}
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'YouTube'].map((social, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d02894] flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;