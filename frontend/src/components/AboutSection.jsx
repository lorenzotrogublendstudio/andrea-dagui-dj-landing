import React from 'react';
import aboutImage from '../assets/img/showgroup-photo-book-y-25600s7ae89d99-a176-45fd-a9ef-8544ddfb818a-large.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [textRef, textVisible] = useScrollAnimation(0.2);
  const [imageRef, imageVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d02894]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className={`text-center mb-12 scroll-reveal ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Chi Sono
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d02894] to-transparent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div 
            ref={textRef}
            className={`order-2 md:order-1 scroll-reveal-left ${textVisible ? 'active' : ''}`}
          >
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p className="text-xl font-semibold text-[#d02894]">
                Bentrovati a tutti, sono Andrea D'Aguì di ADMUSIC.
              </p>
              
              <p>
                ADMUSIC si occupa di <span className="font-semibold text-black">musica per eventi</span>, ma anche matrimoni, feste aziendali e feste private. 
              </p>
              
              <p>
                Abbiamo a disposizione <span className="font-semibold text-black">cantanti, DJ, artisti di vario genere e musicisti</span>, tra i quali ad esempio sax, violino e pianoforte, ma anche tutti gli altri strumenti sotto forma di band o di singoli.
              </p>
              
              <p>
                Inoltre forniamo servizi ulteriori come il <span className="font-semibold text-black">cerimoniere professionista</span> per il rito del matrimonio.
              </p>
              
              <div className="bg-gradient-to-r from-[#d02894]/10 to-transparent border-l-4 border-[#d02894] p-4 rounded">
                <p className="text-lg font-semibold text-gray-800">
                  Se vuoi un music planner che segua la parte musicale del tuo evento, coordinandosi con esperienza con gli altri tuoi fornitori, sicuramente puoi affidarti a noi.
                </p>
              </div>
              
              <p className="text-2xl font-bold bg-gradient-to-r from-[#d02894] to-purple-600 bg-clip-text text-transparent pt-2">
                ADMUSIC è la soluzione migliore per la musica del tuo evento.
              </p>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className={`order-1 md:order-2 scroll-reveal-right ${imageVisible ? 'active' : ''}`}
          >
            <div className="relative group">
              {/* Subtle glow on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d02894] to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <img 
                src={aboutImage} 
                alt="Andrea D'Aguì" 
                className="relative rounded-lg shadow-2xl w-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_20px_60px_rgba(208,40,148,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;