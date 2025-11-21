import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-2xl">
            AD<span className="text-[#d02894]">MUSIC</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#d02894] transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#d02894] transition">Chi Sono</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#d02894] transition">Servizi</button>
            <button onClick={() => scrollToSection('experience')} className="text-white hover:text-[#d02894] transition">Esperienza</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#d02894] transition">Contatti</button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-black p-4 rounded-lg">
            <button onClick={() => scrollToSection('home')} className="block text-white hover:text-[#d02894] transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="block text-white hover:text-[#d02894] transition">Chi Sono</button>
            <button onClick={() => scrollToSection('services')} className="block text-white hover:text-[#d02894] transition">Servizi</button>
            <button onClick={() => scrollToSection('experience')} className="block text-white hover:text-[#d02894] transition">Esperienza</button>
            <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-[#d02894] transition">Contatti</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;