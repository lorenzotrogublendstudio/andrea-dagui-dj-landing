import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ExperienceSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [experiencesRef, experiencesVisible] = useScrollAnimation(0.1);
  const [bandsRef, bandsVisible] = useScrollAnimation(0.1);

  const experiences = [
    {
      title: "Libero Professionista",
      subtitle: "Organizzazione e Vendita di Servizi per Eventi",
      current: true
    },
    {
      title: "Wedding Singer and Musician",
      company: "ADMUSIC",
      current: true
    },
    {
      title: "Vocalist e Socio Fondatore",
      company: "ANIMA",
      description: "Autore, compositore, arrangiatore e produttore del disco 'Un Giorno Limpido'"
    },
    {
      title: "Musicista - 3 Tour",
      company: "VALERIO SCANU - LIVE NATION SRL",
      description: "Chitarrista, corista e responsabile del supporto musicale informatico"
    },
    {
      title: "Voce Maschile",
      company: "Disco per l'infanzia Seridò"
    },
    {
      title: "Insegnante di Canto e Chitarra",
      company: "ACCADEMIA MUSICALE TREVIGLIO"
    },
    {
      title: "Wedding Singer and Musician",
      company: "PRELUDE MUSICA E SPETTACOLI"
    }
  ];

  const bands = [
    { name: "BROS BAND", type: "Coverband" },
    { name: "BRITNOISE", type: "Rock Britannico" },
    { name: "LA DISTRAZIONE", type: "Tributo Negramaro" },
    { name: "FUORIONDA", type: "Coverband" },
    { name: "TOTO'", type: "Tributo ai Toto" }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d02894]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className={`text-center mb-12 scroll-reveal ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Esperienza
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d02894] to-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 text-xl">
            Un percorso professionale ricco e variegato
          </p>
        </div>
        
        <div ref={experiencesRef} className="max-w-4xl mx-auto space-y-6 mb-16">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#d02894] hover:bg-white/10 hover:border-l-8 transition-all duration-300 group scroll-reveal-left ${experiencesVisible ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d02894] transition-colors">
                    {exp.title}
                  </h3>
                  {exp.company && (
                    <p className="text-[#d02894] font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                      {exp.company}
                    </p>
                  )}
                  {exp.subtitle && (
                    <p className="text-gray-400 mb-2">{exp.subtitle}</p>
                  )}
                  {exp.description && (
                    <p className="text-gray-300 italic">{exp.description}</p>
                  )}
                </div>
                {exp.current && (
                  <span className="ml-4 bg-gradient-to-r from-[#d02894] to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Attuale
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={bandsRef} className={`scroll-reveal ${bandsVisible ? 'active' : ''}`}>
            <h3 className="text-3xl font-bold text-white mb-2 text-center">
              Progetti Musicali
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d02894] to-transparent mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {bands.map((band, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#d02894]/50 transition-all duration-300 group hover:bg-white/10 scroll-reveal-scale ${bandsVisible ? 'active' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d02894] to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#d02894] mb-1 group-hover:text-white transition-colors">
                      {band.name}
                    </h4>
                    <p className="text-gray-300 mb-2">{band.type}</p>
                    <p className="text-gray-400 text-sm">Vocalist e Socio Fondatore</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;