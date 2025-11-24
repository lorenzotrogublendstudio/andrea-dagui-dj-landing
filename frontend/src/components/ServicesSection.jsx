import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicesSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  // Link WhatsApp
  const phoneNumber = "393331234567";
  const message = "Ciao! Vorrei un preventivo sui vostri servizi.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const services = [
    // ... (array services esistente) ...
      {
      icon: "🎧",
      title: "DJ Professionista",
      description: "Musica selezionata per ogni momento del tuo evento"
    },
    {
      icon: "🎤",
      title: "Cantanti Live",
      description: "Performance vocali professionali per rendere unico il tuo evento"
    },
    {
      icon: "🎷",
      title: "Musicisti",
      description: "Sax, violino, pianoforte e altri strumenti per band o performance singole"
    },
    {
      icon: "💍",
      title: "Musica per Matrimoni",
      description: "Accompagnamento musicale completo per ogni fase del matrimonio"
    },
    {
      icon: "🎩",
      title: "Cerimoniere",
      description: "Professionista esperto per guidare il rito del matrimonio"
    },
    {
      icon: "🎼",
      title: "Music Planner",
      description: "Coordinamento completo della parte musicale con i tuoi fornitori"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* ... decorations ... */}
       <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#d02894]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className={`text-center mb-12 scroll-reveal ${titleVisible ? 'active' : ''}`}>
          {/* ... title ... */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Servizi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d02894] to-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 text-xl">
            Soluzioni complete per ogni tipo di evento
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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

        {/* PULSANTE WHATSAPP - Centrale */}
        <div className="flex justify-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold rounded-full transition-all duration-300 group"
            >
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Richiedi un pacchetto personalizzato</span>
            </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;