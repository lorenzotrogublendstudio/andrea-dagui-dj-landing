import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicesSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const services = [
    {
      icon: "🎵",
      title: "DJ Professionista",
      description: "Musica selezionata per ogni momento del tuo evento"
    },
    {
      icon: "🎤",
      title: "Cantanti Live",
      description: "Performance vocali professionali per rendere unico il tuo evento"
    },
    {
      icon: "🎸",
      title: "Musicisti",
      description: "Sax, violino, pianoforte e altri strumenti per band o performance singole"
    },
    {
      icon: "💍",
      title: "Musica per Matrimoni",
      description: "Accompagnamento musicale completo per ogni fase del matrimonio"
    },
    {
      icon: "🎭",
      title: "Cerimoniere",
      description: "Professionista esperto per guidare il rito del matrimonio"
    },
    {
      icon: "📋",
      title: "Music Planner",
      description: "Coordinamento completo della parte musicale con i tuoi fornitori"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Subtle decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#d02894]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className={`text-center mb-12 scroll-reveal ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Servizi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d02894] to-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 text-xl">
            Soluzioni complete per ogni tipo di evento
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#d02894]/50 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10 group scroll-reveal-scale ${cardsVisible ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;