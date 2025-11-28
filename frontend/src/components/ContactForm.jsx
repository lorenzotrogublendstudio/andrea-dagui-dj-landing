import React from 'react';
import LeadForm from './LeadForm'; // <--- Importa il componente

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d02894]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Contattami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d02894] to-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-xl">
            Hai dubbi o domande? Scrivimi qui sotto.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#d02894] to-purple-600"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Info Contatti */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Parliamo del tuo evento</h3>
                <p className="text-gray-600">
                  Sono a tua disposizione per creare un'esperienza musicale su misura.
                </p>
              </div>
              
              <div className="space-y-6">
                <a href="mailto:info@admusic.it" className="flex items-center gap-4 text-gray-700 hover:text-[#d02894] transition-colors group p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#d02894]/30">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#d02894] group-hover:scale-110 transition-transform">📧</div>
                  <span className="font-medium">info@admusic.it</span>
                </a>
                <a href="tel:+393331234567" className="flex items-center gap-4 text-gray-700 hover:text-[#d02894] transition-colors group p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#d02894]/30">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#d02894] group-hover:scale-110 transition-transform">📱</div>
                  <span className="font-medium">+39 333 123 4567</span>
                </a>
              </div>
            </div>

            {/* Il Form */}
            <div>
               {/* Usa il componente in variante LIGHT (default) */}
              <LeadForm variant="light" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;