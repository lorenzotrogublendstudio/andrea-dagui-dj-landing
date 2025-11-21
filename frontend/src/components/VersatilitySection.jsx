import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const VersatilitySection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);

  const moments = [
    {
      time: "Aperitivo",
      emoji: "🥂",
      title: "Atmosfera Elegante",
      description: "Musica raffinata e sottofondo perfetto per accogliere gli ospiti con classe",
      gradient: "from-amber-50 to-orange-50",
      borderGradient: "from-amber-400 to-orange-400",
      badge: "Aperitivo"
    },
    {
      time: "Ricevimento",
      emoji: "🎊",
      title: "Energia e Divertimento",
      description: "Il party entra nel vivo con brani coinvolgenti che fanno ballare tutti",
      gradient: "from-pink-50 to-purple-50",
      borderGradient: "from-[#d02894] to-purple-500",
      badge: "Ricevimento"
    },
    {
      time: "Momenti Speciali",
      emoji: "💫",
      title: "Emozioni Intense",
      description: "Musica per taglio torta, bouquet e i momenti più toccanti della giornata",
      gradient: "from-purple-50 to-indigo-50",
      borderGradient: "from-purple-400 to-indigo-500",
      badge: "Momenti Speciali"
    },
    {
      time: "Gran Finale",
      emoji: "🎆",
      title: "L'Apoteosi della Festa",
      description: "Il culmine della serata con i brani più amati e richiesti",
      gradient: "from-rose-50 to-pink-50",
      borderGradient: "from-rose-500 to-pink-500",
      badge: "Gran Finale"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations - più elaborate */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d02894]/5 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-subtle animation-delay-400"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl"></div>

      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d02894]/20 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className={`text-center mb-12 sm:mb-16 scroll-reveal ${titleVisible ? 'active' : ''}`}>
          {/* Badge più elegante */}
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-[#d02894]/10 via-purple-500/10 to-[#d02894]/10 rounded-full border border-[#d02894]/20 backdrop-blur-sm">
            <span className="text-2xl">🎭</span>
            <span className="text-[#d02894] font-bold text-sm sm:text-base tracking-wide">VERSATILITÀ TOTALE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight">
            Ogni Momento,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] via-purple-500 to-pink-500">
              La Giusta Atmosfera
            </span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Mi adatto <span className="text-[#d02894] font-semibold">perfettamente</span> ad ogni fase della vostra giornata, evolvendo il mio stile musicale dal momento più elegante al più scatenato. Cambio anche <span className="text-purple-600 font-semibold">abito</span> per essere sempre in sintonia con l'atmosfera!
          </p>
        </div>

        {/* Cards grid - design migliorato */}
        <div ref={contentRef} className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 scroll-reveal ${contentVisible ? 'active' : ''}`}>
          {moments.map((moment, index) => (
            <div 
              key={index}
              className={`relative group bg-gradient-to-br ${moment.gradient} p-8 sm:p-10 rounded-3xl border-2 border-gray-100 hover:border-transparent transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${moment.borderGradient} p-[2px]`}>
                <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${moment.gradient}`}></div>
              </div>
              
              <div className="relative z-10">
                {/* Header con emoji e badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    {/* Glow effect dietro emoji */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${moment.borderGradient} opacity-20 blur-2xl scale-150 group-hover:scale-175 transition-transform duration-500`}></div>
                    <div className="relative text-6xl sm:text-7xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {moment.emoji}
                    </div>
                  </div>
                  <span className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${moment.borderGradient} text-white px-4 py-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {moment.badge}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#d02894] group-hover:to-purple-500 transition-all duration-300">
                  {moment.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {moment.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/50 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight box - design premium */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#d02894] to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
          
          <div className="relative bg-gradient-to-r from-[#d02894] to-purple-600 p-1 rounded-3xl shadow-2xl">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 sm:p-12 rounded-3xl">
              {/* Icon sequence */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
                {['👔', '➡️', '🎩', '➡️', '🕺'].map((icon, i) => (
                  <div 
                    key={i}
                    className="text-4xl sm:text-5xl md:text-6xl transform hover:scale-125 transition-transform duration-300"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] via-purple-400 to-pink-400">
                  Cambio Look Durante la Serata
                </span>
              </h3>
              
              {/* Description */}
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
                Per rendere ogni momento ancora più <span className="text-[#d02894] font-semibold">speciale</span>, cambio abito durante la festa adeguandomi all'evoluzione della serata: <span className="text-purple-400 font-semibold">eleganza</span> per l'inizio, <span className="text-pink-400 font-semibold">energia</span> per il party!
              </p>

              {/* Decorative elements */}
              <div className="flex justify-center gap-2 mt-8">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d02894] to-purple-500 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersatilitySection;