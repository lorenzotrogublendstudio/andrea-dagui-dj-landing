import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MiniSiteSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);

  const features = [
    {
      icon: "🌐",
      title: "Il Tuo Sito Personale",
      description: "Crea un mini sito web dedicato al vostro matrimonio con tutte le info dello spettacolo",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: "🎵",
      title: "Playlist Personalizzata",
      description: "Gli sposi e gli invitati possono richiedere le loro canzoni preferite",
      gradient: "from-[#d02894]/10 to-pink-500/10",
      iconBg: "from-[#d02894]/20 to-pink-500/20"
    },
    {
      icon: "📅",
      title: "Pianificazione Condivisa",
      description: "Programma insieme i momenti salienti della giornata",
      gradient: "from-purple-500/10 to-indigo-500/10",
      iconBg: "from-purple-500/20 to-indigo-500/20"
    },
    {
      icon: "🎉",
      title: "Scherzi e Sorprese",
      description: "Organizza sorprese e scherzi per rendere il giorno ancora più speciale",
      gradient: "from-orange-500/10 to-red-500/10",
      iconBg: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects - più elaborati */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d02894]/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle animation-delay-400"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d02894]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className={`text-center mb-12 sm:mb-16 scroll-reveal ${titleVisible ? 'active' : ''}`}>
          {/* Badge più elegante */}
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-[#d02894]/10 via-purple-500/10 to-[#d02894]/10 rounded-full border border-[#d02894]/30 backdrop-blur-sm">
            <span className="text-2xl">🌟</span>
            <span className="text-[#d02894] font-bold text-sm sm:text-base tracking-wide">IL NOSTRO PLUS ESCLUSIVO</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Un Mini Sito Web
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] via-purple-500 to-pink-500 animate-glow-text">
              Dedicato ai Vostri Ospiti
            </span>
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Un servizio <span className="text-[#d02894] font-semibold">unico</span> che ci distingue: creo un sito web personalizzato per il vostro matrimonio dove ospiti e sposi possono interagire, richiedere canzoni e pianificare insieme i momenti più emozionanti
          </p>
        </div>

        {/* Feature Cards - design migliorato */}
        <div ref={contentRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 scroll-reveal ${contentVisible ? 'active' : ''}`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative group bg-gradient-to-br ${feature.gradient} backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#d02894]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d02894]/20 overflow-hidden`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon container */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-5 rounded-2xl bg-gradient-to-br ${feature.iconBg} border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                <div className="text-4xl sm:text-5xl">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#d02894] group-hover:to-purple-500 transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#d02894]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats section - design più elegante */}
        <div className="relative max-w-6xl mx-auto">
          {/* Background decorativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#d02894]/5 via-purple-500/5 to-[#d02894]/5 rounded-3xl blur-xl"></div>
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl border border-[#d02894]/20">
            {[
              { number: "100+", label: "Mini Siti Creati", icon: "🌐" },
              { number: "95%", label: "Ospiti Coinvolti", icon: "👥" },
              { number: "500+", label: "Canzoni Richieste", icon: "🎵" },
              { number: "100%", label: "Sposi Soddisfatti", icon: "❤️" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                {/* Icon */}
                <div className="text-3xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] via-purple-500 to-pink-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wide group-hover:text-[#d02894] transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Underline animata */}
                <div className="mt-3 h-1 w-0 group-hover:w-full mx-auto bg-gradient-to-r from-[#d02894] to-purple-500 rounded-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniSiteSection;