import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { trackWhatsAppClick } from '../utils/analytics';

const MiniSiteSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);

  // Link WhatsApp
  const phoneNumber = "393331234567";
  const message = "Ciao! Vorrei sapere di più sul servizio del Mini Sito Web per il matrimonio.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackWhatsAppClick('minisite_section');
  };

  // ... (tutto l'array features esistente rimane uguale) ...
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
      {/* ... decorazioni sfondo esistenti ... */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d02894]/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle animation-delay-400"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d02894]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className={`text-center mb-12 sm:mb-16 scroll-reveal ${titleVisible ? 'active' : ''}`}>
           {/* ... titolo esistente ... */}
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

        {/* Feature Cards */}
        <div ref={contentRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 scroll-reveal ${contentVisible ? 'active' : ''}`}>
           {/* ... mapping cards esistente ... */}
           {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative group bg-gradient-to-br ${feature.gradient} backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#d02894]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#d02894]/20 overflow-hidden`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
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

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#d02894]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* PULSANTE WHATSAPP - Allineato al Centro */}
        <div className="text-center mb-16">
          <a 
            href={whatsappLink}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#25D366]/20 group"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Voglio il mio Mini Sito!</span>
          </a>
        </div>

        {/* Stats section */}
        <div className="relative max-w-6xl mx-auto">
           {/* ... codice stats esistente ... */}
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
                <div className="text-3xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] via-purple-500 to-pink-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wide group-hover:text-[#d02894] transition-colors duration-300">
                  {stat.label}
                </div>
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