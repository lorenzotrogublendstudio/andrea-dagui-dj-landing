<?php

class ContactController extends Controller
{
    public function saveLead()
    {
        // Headers standard
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: Content-Type");
        header("Content-Type: application/json");

        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit;
        }

        $input = json_decode(file_get_contents("php://input"), true);
        
        $name = $input['name'] ?? '';
        $email = $input['email'] ?? '';
        $event_date = $input['event_date'] ?? '';
        $message = $input['message'] ?? '';

        if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
            
            // 1. Salva nel Database (Priorità massima)
            $contact = new Contact($name, $email, $event_date, $message);
            
            if ($contact->save()) {
                
                // 2. Prepara i dati per le email
                $emailData = [
                    'name' => $name,
                    'email' => $email,
                    'event_date' => $event_date,
                    'message' => $message
                ];

                $emailService = new EmailService();

                // 3. Invia Notifica all'Admin
                $adminSent = $emailService->sendLeadNotification($emailData);

                // 4. Invia Conferma al Cliente (User)
                // Nota: Anche se questa fallisce, non blocchiamo l'utente, l'importante è aver salvato i dati.
                $userSent = $emailService->sendUserConfirmation($emailData);

                echo json_encode([
                    'status' => 'success', 
                    'message' => 'Richiesta inviata con successo.',
                    'debug_mail' => [
                        'admin' => $adminSent,
                        'user' => $userSent
                    ]
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