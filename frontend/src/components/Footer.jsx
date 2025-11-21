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
            <div className="flex gap-3 justify-center lg:justify-start">
              {[
                { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', link: '#' },
                { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', link: '#' },
                { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', link: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-[#d02894] hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-[#d02894] group"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
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