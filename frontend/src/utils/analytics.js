export const trackWhatsAppClick = async (sectionName) => {
  // Prende l'URL dal file .env (o usa localhost come fallback di sicurezza)
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  try {
    // Nota l'uso degli backtick (`) per inserire la variabile nell'URL
    await fetch(`${API_URL}/analytics/trackWhatsapp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ section: sectionName }),
    });
  } catch (error) {
    console.error("Errore tracciamento analytics:", error);
    // Non blocchiamo l'utente se il tracciamento fallisce
  }
};