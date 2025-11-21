import React, { useState, useEffect } from 'react';

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
    { id: 'services', label: 'Servizi' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'experience', label: 'Esperienza' },
    { id: 'contact', label: 'Contatti' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-lg shadow-2xl border-b border-[#d02894]/20' 
        : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - allineato a sinistra */}
          <div className="relative group cursor-pointer flex-shrink-0" onClick={() => scrollToSection('home')}>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#d02894] to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            <div className="relative text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">
              ANDREA D'AGUÌ<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] to-purple-500"> MUSIC</span>
            </div>
          </div>
          
          {/* Desktop Menu - centrato */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
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
                    {/* Background attivo */}
                    <span 
                      className={`absolute inset-0 bg-gradient-to-r from-[#d02894] to-purple-600 rounded-full transition-all duration-300 ease-in-out ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    ></span>
                    
                    {/* Underline animato al hover */}
                    <span 
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#d02894] to-purple-600 transition-all duration-300 ease-out ${
                        isHovered ? 'w-3/4 opacity-100' : 'w-0 opacity-0'
                      }`}
                    ></span>
                    
                    {/* Glow effect al hover */}
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

          {/* CTA Button Desktop - allineato a destra */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <button
              onClick={() => scrollToSection('contact')}
              className="relative group px-5 lg:px-6 xl:px-7 py-2.5 lg:py-3 bg-gradient-to-r from-[#d02894] to-purple-600 text-white font-bold rounded-full text-xs sm:text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#d02894]/50 hover:scale-105 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-2">
                Prenota Ora
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-[#d02894] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex-shrink-0 ml-4"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute w-full h-0.5 bg-white top-2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-[500px] pb-4' : 'max-h-0'}`}>
          <div className="bg-black/95 backdrop-blur-xl rounded-2xl border border-[#d02894]/20 shadow-2xl overflow-hidden mt-4">
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-full text-left px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 border-b border-white/5 last:border-0 group ${
                    isActive
                      ? 'bg-gradient-to-r from-[#d02894]/20 to-transparent text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 0.03}s` : '0s' }}
                >
                  {/* Sliding bar */}
                  <span className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d02894] to-purple-600 transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></span>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm sm:text-base transition-transform duration-300 group-hover:translate-x-2">
                      {item.label}
                    </span>
                    
                    {isActive ? (
                      <span className="w-2 h-2 bg-[#d02894] rounded-full"></span>
                    ) : (
                      <svg 
                        className="w-4 h-4 text-[#d02894] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
            
            {/* CTA Button Mobile */}
            <div className="p-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#d02894] to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#d02894]/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base group"
              >
                Prenota Ora
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;