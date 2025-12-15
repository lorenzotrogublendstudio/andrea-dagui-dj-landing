<?php

class ContactController extends Controller
{
    public function saveLead()
    {
        // Logga l'inizio della richiesta
        error_log("--- NUOVA RICHIESTA SAVELEAD ---");

        header("Content-Type: application/json");

        try {
            // Logga i dati in ingresso (Raw Input)
            $rawInput = file_get_contents("php://input");
            error_log("Dati ricevuti (RAW): " . $rawInput);

            $input = json_decode($rawInput, true);
            
            $name = $input['name'] ?? '';
            $email = $input['email'] ?? '';
            $event_date = $input['event_date'] ?? '';
            $message = $input['message'] ?? '';

            if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
                
                error_log("Validazione OK. Tentativo salvataggio DB...");
                
                // 1. Salva nel DB
                $contact = new Contact($name, $email, $event_date, $message);
                $saved = $contact->save();

                if ($saved) {
                    error_log("Salvataggio DB riuscito. Inizializzazione EmailService...");

                    // 2. Invia Email
                    // Se il server non trova PHPMailer, si spaccherà QUI
                    $emailService = new EmailService();
                    
                    error_log("EmailService istanziato. Invio notifica Admin...");
                    $adminSent = $emailService->sendLeadNotification([
                        'name' => $name,
                        'email' => $email,
                        'event_date' => $event_date,
                        'message' => $message
                    ]);
                    error_log("Esito notifica Admin: " . ($adminSent ? 'OK' : 'KO'));

                    error_log("Invio conferma User...");
                    $userSent = $emailService->sendUserConfirmation([
                        'name' => $name,
                        'email' => $email,
                        'event_date' => $event_date,
                        'message' => $message
                    ]);
                    error_log("Esito conferma User: " . ($userSent ? 'OK' : 'KO'));

                    echo json_encode([
                        'status' => 'success', 
                        'message' => 'Richiesta ricevuta.',
                        'debug_mail' => ['admin' => $adminSent, 'user' => $userSent]
                    ]);
                } else {
                    error_log("ERRORE: Salvataggio DB fallito.");
                    http_response_code(500);
                    echo json_encode(['status' => 'error', 'message' => 'Errore database.']);
                }
            } else {
                error_log("ERRORE: Dati non validi (Validazione fallita).");
                http_response_code(400);
                echo json_encode(['status' => 'error', 'message' => 'Dati non validi.']);
            }

        } catch (Exception $e) {
            // Cattura qualsiasi eccezione imprevista
            error_log("ECCEZIONE CATTURATA: " . $e->getMessage());
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
        }
        exit;
    }
}
?>