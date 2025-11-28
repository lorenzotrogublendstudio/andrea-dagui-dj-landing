<?php

class ContactController extends Controller
{
    public function saveLead()
    {
        // Imposta solo il tipo di contenuto, il CORS è gestito globalmente
        header("Content-Type: application/json");

        $input = json_decode(file_get_contents("php://input"), true);
        
        $name = $input['name'] ?? '';
        $email = $input['email'] ?? '';
        $event_date = $input['event_date'] ?? '';
        $message = $input['message'] ?? '';

        if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            
            $contact = new Contact($name, $email, $event_date, $message);
            
            if ($contact->save()) {
                
                // Preparazione dati per email
                $emailData = [
                    'name' => $name,
                    'email' => $email,
                    'event_date' => $event_date,
                    'message' => $message
                ];

                // Invio Email
                $emailService = new EmailService();
                $adminSent = $emailService->sendLeadNotification($emailData);
                $userSent = $emailService->sendUserConfirmation($emailData);

                echo json_encode([
                    'status' => 'success', 
                    'message' => 'Richiesta inviata con successo.'
                ]);

            } else {
                http_response_code(500);
                echo json_encode(['status' => 'error', 'message' => 'Errore nel salvataggio del contatto.']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Dati non validi.']);
        }
        exit;
    }
}
?>