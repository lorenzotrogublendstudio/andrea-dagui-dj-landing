import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-16 sm:pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-[#d02894]/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-subtle animation-delay-400"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex flex-col justify-center">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Andrea D'Aguì
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] to-purple-500 mb-4 sm:mb-6 font-semibold">
            DJ & Music Planner
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
            La musica perfetta per il tuo evento speciale
          </p>
          
          <button
            onClick={scrollToContact}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#d02894] to-purple-600 text-white font-bold rounded-full text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#d02894]/50 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Richiedi Informazioni
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-[#d02894] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator proprio in fondo - centrato perfettamente */}
      <div className="relative z-10 pb-6 sm:pb-8 md:pb-10 flex flex-col items-center justify-center">
        <button
          onClick={scrollToAbout}
          className="animate-bounce cursor-pointer group flex flex-col items-center gap-2"
          aria-label="Scorri per saperne di più"
        >
          <div className="relative">
            {/* Cerchio esterno con glow effect */}
            <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#d02894]/20 rounded-full blur-xl group-hover:bg-[#d02894]/40 transition-all duration-300"></div>
            
            {/* Cerchio interno */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#d02894] to-purple-600 rounded-full flex items-center justify-center border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 shadow-lg">
              <svg 
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:translate-y-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          {/* Testo sempre visibile e ben centrato */}
          <p className="text-white/70 group-hover:text-white/90 text-xs sm:text-sm font-semibold transition-all duration-300 tracking-wide">
            Scopri di più
          </p>
        </button>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d02894] rounded-full animate-float opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-float animation-delay-200 opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#d02894] rounded-full animate-float animation-delay-400 opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-float animation-delay-600 opacity-50"></div>
      </div>
    </section>
  );
};

export default HeroSection;