<?php

class ContactController extends Controller
{
    public function saveLead()
    {
        // Headers (come prima)
        header("Content-Type: application/json");

        $input = json_decode(file_get_contents("php://input"), true);
        
        $name = $input['name'] ?? '';
        $email = $input['email'] ?? '';
        $event_date = $input['event_date'] ?? '';
        $message = $input['message'] ?? '';

        if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            
            // 1. Salva nel DB
            $contact = new Contact($name, $email, $event_date, $message);
            $saved = $contact->save();

            if ($saved) {
                // 2. Invia Email (se il salvataggio è riuscito)
                $emailService = new EmailService();
                $emailSent = $emailService->sendLeadNotification([
                    'name' => $name,
                    'email' => $email,
                    'event_date' => $event_date,
                    'message' => $message
                ]);

                // Rispondi al frontend (successo anche se l'email fallisce, il dato è al sicuro nel DB)
                echo json_encode([
                    'status' => 'success', 
                    'message' => 'Richiesta ricevuta.',
                    'email_sent' => $emailSent // utile per debug
                ]);
            } else {
                http_response_code(500);
                echo json_encode(['status' => 'error', 'message' => 'Errore database.']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Dati non validi.']);
        }
        exit;
    }
}
?>