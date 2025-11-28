import React from 'react';
import LeadForm from './LeadForm'; // <--- Importa il componente
import CTAButton from './CTAButton';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-24 pb-12 sm:pt-32 sm:pb-16">
      {/* ... Sfondo (codice esistente) ... */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Testo a Sinistra */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Andrea D'Aguì
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] to-purple-500 mb-6 font-bold">
              DJ & Music Planner
            </p>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              La colonna sonora perfetta per il tuo matrimonio, curata in ogni dettaglio.
            </p>
            
            {/* Pulsante scopri di più (desktop) */}
            <div className="hidden lg:flex items-center gap-4 mt-8">
               <div className="cursor-pointer group flex items-center gap-2" onClick={scrollToAbout}>
                  {/* ... icone (codice esistente) ... */}
                  <span className="text-white/70 group-hover:text-white transition-colors">Scopri di più</span>
               </div>
               <CTAButton text="Richiedi Preventivo" variant="primary" />
            </div>
          </div>

          {/* Form a Destra */}
          <div className="animate-slide-up w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#d02894]/20 relative">
              <h3 className="text-2xl font-bold text-white mb-2">Blocca la tua data! 📅</h3>
              <p className="text-gray-300 text-sm mb-6">Compila il form per verificare la disponibilità.</p>
              
              {/* Usa il componente in variante DARK */}
              <LeadForm variant="dark" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;