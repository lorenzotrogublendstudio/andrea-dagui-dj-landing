import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('http://localhost:3000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d02894]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Contattami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d02894] to-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-xl">
            Parliamo del tuo evento speciale
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-[0_20px_60px_rgba(208,40,148,0.15)] transition-shadow duration-500">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nome */}
            <div className="relative">
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.name || formData.name 
                  ? '-top-3 text-sm bg-white px-2 text-[#d02894] font-semibold' 
                  : 'top-4 text-gray-500'
              }`}>
                Nome *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#d02894] focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.email || formData.email 
                  ? '-top-3 text-sm bg-white px-2 text-[#d02894] font-semibold' 
                  : 'top-4 text-gray-500'
              }`}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#d02894] focus:outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Messaggio */}
            <div className="relative">
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.message || formData.message 
                  ? '-top-3 text-sm bg-white px-2 text-[#d02894] font-semibold' 
                  : 'top-4 text-gray-500'
              }`}>
                Messaggio *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                required
                rows="6"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#d02894] focus:outline-none transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-gradient-to-r from-[#d02894] to-purple-600 hover:from-[#b02080] hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#d02894]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Invio in corso...
                </>
              ) : (
                <>
                  Invia Richiesta
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>

            {/* Success Message */}
            {status === 'success' && (
              <div className="bg-green-50 border-2 border-green-400 text-green-800 px-6 py-4 rounded-xl flex items-center gap-3 animate-slide-up">
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-bold">Messaggio inviato con successo!</p>
                  <p className="text-sm">Ti contatterò presto.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="bg-red-50 border-2 border-red-400 text-red-800 px-6 py-4 rounded-xl flex items-center gap-3 animate-slide-up">
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-bold">Errore nell'invio</p>
                  <p className="text-sm">Riprova più tardi o contattami direttamente.</p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Informazioni di contatto alternative */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Oppure contattami direttamente:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+393331234567" className="flex items-center gap-2 text-[#d02894] hover:text-purple-600 transition-colors font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +39 333 123 4567
            </a>
            <a href="mailto:info@admusic.it" className="flex items-center gap-2 text-[#d02894] hover:text-purple-600 transition-colors font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              info@admusic.it
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;