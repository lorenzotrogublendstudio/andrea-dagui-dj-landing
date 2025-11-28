import React, { useState } from 'react';

// URL del backend (assicurati che la porta 8000 sia corretta per il tuo server PHP)
const API_URL = 'http://localhost:8000'; 

const LeadForm = ({ variant = 'light' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event_date: '', // Nuovo campo stato
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const isDark = variant === 'dark';

  // Stili dinamici in base alla variante (scuro per Hero, chiaro per Footer)
  const inputBaseClass = "w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-300";
  const inputClass = isDark 
    ? `${inputBaseClass} bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#d02894] focus:bg-white/20` 
    : `${inputBaseClass} bg-gray-50 border-gray-200 text-gray-800 focus:border-[#d02894] focus:bg-white`;

  const labelClass = `block mb-1 text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // CHIAMATA AL BACKEND
      const response = await fetch(`${API_URL}/contact/saveLead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setStatus('success');
        setFormData({ name: '', email: '', event_date: '', message: '' }); // Reset form
        setTimeout(() => setStatus(''), 5000); // Rimuovi messaggio dopo 5 sec
      } else {
        setStatus('error');
        console.error("Errore server:", result.message);
      }
    } catch (error) {
      console.error("Errore di rete:", error);
      setStatus('error');
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 scroll-mt-24">
      {/* Nome */}
      <div>
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
      <div>
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

      {/* Data Evento (Nuovo Campo) */}
      <div>
        <label className={labelClass}>Data Presunta Evento</label>
        <input
          type="date"
          name="event_date"
          value={formData.event_date}
          onChange={handleChange}
          // [color-scheme:dark] forza l'icona del calendario bianca su sfondi scuri
          className={`${inputClass} ${isDark ? '[color-scheme:dark]' : ''}`} 
        />
      </div>

      {/* Messaggio */}
      <div>
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
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gradient-to-r from-[#d02894] to-purple-600 hover:from-[#b02080] hover:to-purple-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-[#d02894]/40 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Invio...
          </>
        ) : (
          'Richiedi Preventivo Gratuito'
        )}
      </button>

      {/* Messaggi di Feedback */}
      {status === 'success' && (
        <div className="bg-green-500/20 border border-green-500/50 text-green-500 text-sm font-bold px-4 py-3 rounded-xl animate-fade-in text-center">
          ✅ Messaggio inviato con successo!
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-500 text-sm font-bold px-4 py-3 rounded-xl animate-fade-in text-center">
          ❌ Si è verificato un errore. Riprova.
        </div>
      )}
    </form>
  );
};

export default LeadForm;