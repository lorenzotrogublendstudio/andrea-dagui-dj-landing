import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden border-t border-[#d02894]/30">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d02894]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 sm:mb-12">
          {/* Logo & Description - CENTRATO */}
          <div className="sm:col-span-2 lg:col-span-1 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              ANDREA D'AGUÌ<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] to-purple-500"> MUSIC</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              DJ & Music Planner professionista per eventi indimenticabili, matrimoni da sogno e feste aziendali di successo.
            </p>
       
          </div>

          {/* Quick Links - CENTRATO */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] to-purple-500">
              Link Rapidi
            </h4>
            <ul className="space-y-3 flex flex-col items-center lg:items-start">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Chi Sono', id: 'about' },
                { label: 'Gallery', id: 'gallery' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#d02894] transition-colors text-sm sm:text-base flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#d02894] transition-all duration-300"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti - CENTRATO */}
          <div className="sm:col-span-2 lg:col-span-2 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] to-purple-500">
              Contatti
            </h4>
            <ul className="space-y-4 text-sm sm:text-base flex flex-col items-center lg:items-start">
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-10 h-10 rounded-full bg-[#d02894]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d02894]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#d02894]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <a href="mailto:info@admusic.it" className="hover:text-[#d02894] transition-colors">
                    info@admusic.it
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-10 h-10 rounded-full bg-[#d02894]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d02894]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#d02894]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Telefono</p>
                  <a href="tel:+393331234567" className="hover:text-[#d02894] transition-colors">
                    +39 333 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="w-10 h-10 rounded-full bg-[#d02894]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d02894]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#d02894]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Location</p>
                  <p>Milano, Italia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; {currentYear} <span className="text-[#d02894] font-bold">ANDREA D'AGUÌ MUSIC</span>. Tutti i diritti riservati. | P.IVA: 12345678901
            </p>
          </div>

          {/* Credits */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">
              Designed with <span className="text-[#d02894]">♥</span> by <span className="text-[#d02894] font-semibold">Blend Studio</span>
            </p>
          </div>
        </div>
      </div>

      {/* Animated gradient line at bottom */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d02894] to-transparent animate-pulse-subtle"></div>
    </footer>
  );
};

export default Footer;