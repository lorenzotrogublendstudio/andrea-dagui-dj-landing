import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import img1 from '../assets/img/img1.jpg';

const AboutSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);
  const [imageRef, imageVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className={`text-center mb-10 sm:mb-12 md:mb-16 scroll-reveal ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black">
            Chi Sono
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-[#d02894] to-transparent mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl px-4">
            La tua musica, la mia passione
          </p>
        </div>

        {/* Grid con testo a sinistra e foto a destra */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-center">
          {/* Testo a sinistra */}
          <div ref={contentRef} className={`scroll-reveal ${contentVisible ? 'active' : ''}`}>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-gray-100 shadow-2xl shadow-gray-200/50">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                  <span className="text-[#d02894] font-bold text-xl sm:text-2xl">Bentrovati a tutti!</span> Sono <span className="text-black font-bold">Andrea D'Aguì</span> di <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] to-purple-500 font-bold">ADMUSIC</span>.
                </p>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                  ADMUSIC si occupa di <span className="text-black font-semibold">musica per eventi</span>, ma anche <span className="text-black font-semibold">matrimoni</span>, <span className="text-black font-semibold">feste aziendali</span> e <span className="text-black font-semibold">feste private</span>.
                </p>

                <div className="bg-gradient-to-r from-[#d02894]/5 via-purple-500/5 to-[#d02894]/5 p-6 rounded-2xl border-2 border-[#d02894]/10 mb-6">
                  <h3 className="text-[#d02894] font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
                    🎵 Il Nostro Team
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Abbiamo a disposizione <span className="text-black font-semibold">cantanti, DJ, artisti di vario genere e musicisti</span>, tra i quali ad esempio <span className="text-[#d02894] font-semibold">sax, violino e pianoforte</span>, ma anche tutti gli altri strumenti sotto forma di band o di singoli.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                    <div className="text-3xl mb-3">🎤</div>
                    <h4 className="text-black font-bold text-base sm:text-lg mb-2">Cerimoniere Professionista</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Servizio completo per il rito del matrimonio</p>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-white p-5 rounded-xl border-2 border-[#d02894]/20 hover:border-[#d02894]/50 transition-all duration-300 hover:shadow-lg">
                    <div className="text-3xl mb-3">🎼</div>
                    <h4 className="text-black font-bold text-base sm:text-lg mb-2">Music Planner</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Coordiniamo la parte musicale con esperienza</p>
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-[#d02894] to-purple-600 p-6 sm:p-8 rounded-2xl shadow-lg shadow-[#d02894]/30">
                  <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
                    AD Music è la soluzione migliore per la musica del tuo evento 🎉
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Foto a destra */}
          <div ref={imageRef} className={`scroll-reveal ${imageVisible ? 'active' : ''} lg:order-last`}>
            <div className="relative group">
              {/* Image container */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                <img 
                  src={img1}
                  alt="Andrea D'Aguì DJ"
                  className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Text overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">Andrea D'Aguì</h3>
                  <p className="text-white/90 text-sm sm:text-base">DJ & Music Planner Professionista</p>
                </div>
              </div>
            </div>

            {/* Stats sotto la foto */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "500+", label: "Eventi" },
                { number: "15+", label: "Anni Esperienza" },
                { number: "100%", label: "Soddisfazione" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-[#d02894]/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d02894] to-purple-500 mb-1 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;