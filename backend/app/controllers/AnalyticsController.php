<?php

class AnalyticsController extends Controller
{
    public function trackWhatsapp()
    {
        // Nota: Gli header CORS sono gestiti globalmente in index.php

        $input = json_decode(file_get_contents("php://input"), true);
        $section = $input['section'] ?? 'unknown';

        $click = new WhatsAppClick($section);

        if ($click->save()) {
            $this->jsonResponse(['status' => 'success', 'message' => 'Click registrato'], 201);
        } else {
            $this->jsonResponse(['status' => 'error', 'message' => 'Errore nel database'], 500);
        }
    }
}
?>