<?php

class ContactController extends Controller
{
    public function saveLead()
    {
        // Headers per CORS e JSON
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: Content-Type");
        header("Content-Type: application/json");

        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit;
        }

        // 1. Recupera i dati grezzi
        $input = json_decode(file_get_contents("php://input"), true);
        
        $name = $input['name'] ?? '';
        $email = $input['email'] ?? '';
        $event_date = $input['event_date'] ?? ''; // Recupero data
        $message = $input['message'] ?? '';

        // 2. Validazione base
        if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            
            // 3. Istanzia il modello con i 4 parametri
            $contact = new Contact($name, $email, $event_date, $message);

            // 4. Salva
            if ($contact->save()) {
                echo json_encode(['status' => 'success', 'message' => 'Richiesta inviata con successo.']);
            } else {
                http_response_code(500);
                echo json_encode(['status' => 'error', 'message' => 'Errore nel salvataggio db.']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Dati non validi (Nome o Email mancanti).']);
        }
    }
}
?>