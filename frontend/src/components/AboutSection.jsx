import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import img1 from '../assets/img/img1.jpg';
import { trackWhatsAppClick } from '../utils/analytics';

const AboutSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);
  const [imageRef, imageVisible] = useScrollAnimation(0.1);

  // Link WhatsApp
  const phoneNumber = "393331234567";
  const message = "Ciao Andrea, ho letto la tua biografia e vorrei maggiori info!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackWhatsAppClick('about_section');
  };

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

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
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

                {/* PULSANTE WHATSAPP - Allineato a Sinistra */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a 
                    href={whatsappLink}
                    onClick={handleClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#25D366]/20 group"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Contattami su WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Foto a destra */}
          <div ref={imageRef} className={`scroll-reveal ${imageVisible ? 'active' : ''} lg:order-last`}>
             <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                <img 
                  src={img1}
                  alt="Andrea D'Aguì DJ"
                  className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-coverTZ transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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