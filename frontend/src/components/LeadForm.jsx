import React, { useState } from 'react';

// URL del backend
const API_URL = import.meta.env.VITE_API_URL || 'https://eventoinmusica.com/api'; 

const LeadForm = ({ variant = 'light' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event_date: '',
    message: ''
  });
  const [status, setStatus] = useState(''); 

  const isDark = variant === 'dark';

  // --- MODIFICA AGGRESSIVA QUI ---
  // 1. w-[90%]: Forza la larghezza al 90% del contenitore (lascia 5% di spazio a destra e sinistra)
  // 2. mx-auto: Centra il campo nel modulo
  // 3. px-2: Riduce il padding interno per dare più spazio al testo della data su schermi piccoli
  // 4. text-sm: Rimpicciolisce leggermente il font per evitare zoom automatico su iOS
  const inputBaseClass = "block w-[90%] mx-auto box-border px-2 py-3 rounded-xl border-2 outline-none transition-all duration-300 text-sm md:text-base md:w-full md:px-4";
  
  const inputClass = isDark 
    ? `${inputBaseClass} bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#d02894] focus:bg-white/20` 
    : `${inputBaseClass} bg-gray-50 border-gray-200 text-gray-800 focus:border-[#d02894] focus:bg-white`;

  const labelClass = `block mb-1 text-sm font-semibold text-center md:text-left ${isDark ? 'text-gray-300' : 'text-gray-600'}`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch(`${API_URL}/contact/saveLead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setStatus('success');
        setFormData({ name: '', email: '', event_date: '', message: '' }); 
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Errore:", error);
      setStatus('error');
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 scroll-mt-24 w-full overflow-hidden">
      
      {/* Nome */}
      <div className="w-full text-center md:text-left">
        <label className={labelClass}>Nome e Cognome *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Mario Rossi"
        />
      </div>

      {/* Email */}
      <div className="w-full text-center md:text-left">
        <label className={labelClass}>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="mario@email.com"
        />
      </div>

      {/* Data Evento */}
      <div className="w-full text-center md:text-left">
        <label className={labelClass}>Data Presunta Evento</label>
        <input
          type="date"
          name="event_date"
          value={formData.event_date}
          onChange={handleChange}
          className={`${inputClass} ${isDark ? '[color-scheme:dark]' : ''}`} 
          // Stile extra per forzare iOS a comportarsi bene
          style={{ minWidth: '0', appearance: 'none', WebkitAppearance: 'none' }}
        />
      </div>

      {/* Messaggio */}
      <div className="w-full text-center md:text-left">
        <label className={labelClass}>Messaggio</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="3"
          className={inputClass}
          placeholder="Raccontami del tuo evento..."
        ></textarea>
      </div>

      {/* Bottone Invio */}
      <div className="w-full flex justify-center md:justify-start">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-[90%] md:w-full bg-gradient-to-r from-[#d02894] to-purple-600 hover:from-[#b02080] hover:to-purple-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-[#d02894]/40 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'sending' ? 'Invio...' : 'Richiedi Preventivo Gratuito'}
        </button>
      </div>

      {/* Feedback */}
      {status === 'success' && (
        <div className="w-[90%] mx-auto bg-green-500/20 border border-green-500/50 text-green-500 text-sm font-bold px-4 py-3 rounded-xl text-center">
          ✅ Messaggio inviato!
        </div>
      )}
      {status === 'error' && (
        <div className="w-[90%] mx-auto bg-red-500/20 border border-red-500/50 text-red-500 text-sm font-bold px-4 py-3 rounded-xl text-center">
          ❌ Errore. Riprova.
        </div>
      )}
    </form>
  );
};

export default LeadForm;