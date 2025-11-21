import React from 'react';
import heroImage from '../assets/img/img8.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <img 
          src={heroImage} 
          alt="Andrea D'Aguì DJ" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          Andrea D'Aguì
        </h1>
        <div className="text-3xl md:text-5xl mb-6 text-[#d02894] font-semibold animate-slide-up animation-delay-200">
          DJ & Music Planner
        </div>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up animation-delay-400">
          La musica perfetta per il tuo evento speciale
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-[#d02894] hover:bg-[#b02080] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[#d02894]/50 animate-slide-up animation-delay-600"
        >
          Richiedi Informazioni
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#d02894]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;