export const trackWhatsAppClick = async (sectionName) => {
  try {
    await fetch('http://localhost:8000/analytics/trackWhatsapp', {
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