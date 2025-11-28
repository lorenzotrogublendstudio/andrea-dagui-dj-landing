import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'gallery', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current && current !== activeSection && !isTransitioning) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, isTransitioning]);

  const scrollToSection = (id) => {
    if (id === activeSection) return;
    
    setIsTransitioning(true);
    setActiveSection(id);
    setHoveredItem(null);
    
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Chi Sono' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'services', label: 'Servizi' },
   
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-lg shadow-2xl border-b border-[#d02894]/20' 
        : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* 1. SINISTRA: Logo */}
          <div className="flex-1 flex justify-start">
            <div className="relative group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d02894] to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              <div className="relative text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">
                ANDREA D'AGUÌ<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] to-purple-500"> MUSIC</span>
              </div>
            </div>
          </div>
          
          {/* 2. CENTRO: Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full px-3 py-2.5 border border-white/10">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                const isHovered = hoveredItem === item.id && !isActive;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => !isTransitioning && setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative px-4 xl:px-5 py-2 rounded-full text-xs xl:text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span 
                      className={`absolute inset-0 bg-gradient-to-r from-[#d02894] to-purple-600 rounded-full transition-all duration-300 ease-in-out ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    ></span>
                    <span 
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#d02894] to-purple-600 transition-all duration-300 ease-out ${
                        isHovered ? 'w-3/4 opacity-100' : 'w-0 opacity-0'
                      }`}
                    ></span>
                    <span 
                      className={`absolute inset-0 rounded-full transition-all duration-300 ease-out ${
                        isHovered ? 'bg-[#d02894]/10' : 'bg-transparent'
                      }`}
                    ></span>
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. DESTRA: CTA Desktop & Mobile Toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {/* CTA Desktop */}
            <div className="hidden lg:block">
              <CTAButton text="Preventivo" variant="primary" className="!py-2 !px-6 !text-sm" />
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center backdrop-blur-sm hover:bg-white/5 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'top-2 rotate-45' : 'top-0'
                }`}></span>
                <span className={`absolute left-0 w-full h-0.5 bg-white rounded-full top-2 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                <span className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}></span>
              </div>
            </button>
          </div>

        </div>

        {/* Mobile Menu Content */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[600px] opacity-100 mb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-black/98 via-gray-900/98 to-black/98 backdrop-blur-2xl rounded-3xl border border-[#d02894]/30 shadow-2xl shadow-[#d02894]/10 overflow-hidden mt-4">
            <div className="px-6 py-4 border-b border-white/5 bg-gradient-to-r from-[#d02894]/10 to-purple-600/10">
              <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">Menu</p>
            </div>
            <div className="py-2">
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative w-full text-left px-6 py-4 transition-all duration-300 border-b border-white/5 last:border-0 group ${
                      isActive
                        ? 'bg-gradient-to-r from-[#d02894]/20 via-[#d02894]/10 to-transparent text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                    style={{ 
                      animationDelay: isMenuOpen ? `${index * 0.05}s` : '0s',
                      animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    {/* Barra laterale attiva */}
                    <span className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d02894] via-purple-500 to-purple-600 transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100'
                    }`}></span>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#d02894]">
                        {item.label}
                      </span>
                      
                      {/* ICONA CHEVRON (Freccia) */}
                      {/* Modificata: Ora viene mostrata anche quando è attivo (isActive), con opacità piena */}
                      <svg 
                        className={`w-5 h-5 text-[#d02894] transition-all duration-300 group-hover:translate-x-1 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                );
              })}
              
              {/* CTA Mobile */}
              <div className="px-6 py-4">
                <CTAButton text="Richiedi Preventivo" variant="primary" className="w-full justify-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;