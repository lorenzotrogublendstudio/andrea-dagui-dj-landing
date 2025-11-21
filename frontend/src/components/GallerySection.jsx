import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Importa le immagini con nomi corretti
import img1 from '../assets/img/immagini-corrette-simo/ANDREA-D-AGUI-.jpg';
import img2 from '../assets/img/immagini-corrette-simo/ANDREA-D-AGUI-concerto-.jpg';
import img3 from '../assets/img/immagini-corrette-simo/ANDREA-D-AGUI-concerto.jpg';
import img4 from '../assets/img/immagini-corrette-simo/ANDREA-D-AGUI-matrimoni.jpg';
import img5 from '../assets/img/immagini-corrette-simo/img_dagui.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [galleryRef, galleryVisible] = useScrollAnimation(0.1);

  const images = [
    { src: img1, alt: "Andrea D'Aguì - DJ Performance", category: "DJ" },
    { src: img2, alt: "Andrea D'Aguì - Concerto Live", category: "Live" },
    { src: img3, alt: "Andrea D'Aguì - Performance Live", category: "Live" },
    { src: img4, alt: "Andrea D'Aguì - Matrimoni", category: "Wedding" },
    { src: img5, alt: "Andrea D'Aguì - Show Performance", category: "Band" }
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
        
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg cursor-pointer group bg-black min-h-[250px] sm:min-h-[280px] md:min-h-[300px] flex items-center justify-center scroll-reveal-rotate ${galleryVisible ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              {/* Border glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d02894] to-purple-600 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-300"></div>
              
              {/* Category badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-[#d02894] text-white text-xs px-2 py-1 sm:px-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
                <p className="text-white font-bold text-base sm:text-lg mb-2">{image.alt}</p>
                <div className="flex items-center gap-2 text-[#d02894]">
                  <span className="text-xs sm:text-sm font-semibold">Visualizza</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal per immagine ingrandita */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-3xl sm:text-4xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:text-[#d02894] transition-colors hover:rotate-90 transform duration-300 bg-white/10 rounded-full backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative max-w-full sm:max-w-5xl md:max-w-6xl max-h-[85vh] sm:max-h-[90vh] animate-slide-up">
            <div className="absolute -top-10 sm:-top-12 left-0 bg-[#d02894] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm">
              {selectedImage.category}
            </div>
            
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-3 sm:mt-4 text-base sm:text-lg font-semibold px-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;