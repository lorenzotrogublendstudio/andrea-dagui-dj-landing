import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Importa le immagini necessarie
import img1 from '../assets/img/immagini-corrette-simo/ANDREA-D-AGUI-.jpg';
import img4 from '../assets/img/immagini-corrette-simo/ANDREA-D-AGUI-matrimoni.jpg';
import img5 from '../assets/img/immagini-corrette-simo/img_dagui.jpg';

const GallerySection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [galleryRef, galleryVisible] = useScrollAnimation(0.1);

  // Array aggiornato con solo le 3 foto richieste
  const images = [
    { src: img1, alt: "Concerti", category: "DJ" },
    { src: img4, alt: "Matrimoni", category: "Wedding" },
    { src: img5, alt: "Show Performance", category: "Band" }
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#d02894]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className={`text-center mb-8 sm:mb-10 md:mb-12 scroll-reveal ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black">
            Gallery
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-[#d02894] to-transparent mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl px-4">
            Alcuni momenti indimenticabili dei nostri eventi
          </p>
        </div>
        
        {/* Grid aggiornata per gestire bene 3 elementi */}
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg group bg-black min-h-[250px] sm:min-h-[280px] md:min-h-[300px] flex items-center justify-center scroll-reveal-rotate ${galleryVisible ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay - SEMPRE VISIBILE */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-300 z-10"></div>
              
              {/* Border glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d02894] to-purple-600 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-300"></div>
              
              {/* Category badge - SEMPRE VISIBILE */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-[#d02894] text-white text-xs px-2 py-1 sm:px-3 rounded-full font-semibold group-hover:bg-gradient-to-r group-hover:from-[#d02894] group-hover:to-purple-600 transition-all duration-300">
                {image.category}
              </div>
              
              <img 
                src={image.src} 
                alt={image.alt}
                className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  console.error('Image failed to load:', image.src);
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23d02894" width="400" height="300"/%3E%3Ctext fill="%23fff" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImmagine non disponibile%3C/text%3E%3C/svg%3E';
                }}
              />
              
              {/* Text overlay - SEMPRE VISIBILE sul bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 z-20 bg-gradient-to-t from-black via-black/80 to-transparent group-hover:p-6 transition-all duration-300">
                <p className="text-white font-bold text-sm sm:text-base md:text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;