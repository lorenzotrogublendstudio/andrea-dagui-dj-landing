<?php

class AnalyticsController extends Controller
{
    public function trackWhatsapp()
    {
        // 1. Log Inizio Richiesta
        error_log("--- ANALYTICS: RICHIESTA TRACK WHATSAPP INIZIATA ---");

        // Nota: Gli header CORS sono gestiti globalmente in index.php

        $rawInput = file_get_contents("php://input");
        // 2. Log del payload ricevuto (Raw)
        error_log("ANALYTICS Payload ricevuto: " . $rawInput);

        $input = json_decode($rawInput, true);
        $section = $input['section'] ?? 'unknown';

        error_log("ANALYTICS Sezione rilevata: " . $section);

        $click = new WhatsAppClick($section);

        if ($click->save()) {
            error_log("ANALYTICS: Salvataggio riuscito.");
            $this->jsonResponse(['status' => 'success', 'message' => 'Click registrato'], 201);
        } else {
            error_log("ANALYTICS: ERRORE salvataggio nel DB.");
            $this->jsonResponse(['status' => 'error', 'message' => 'Errore nel database'], 500);
        }
    }
}
?>