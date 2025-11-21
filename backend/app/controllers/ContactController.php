<?php

class ContactController extends Controller
{
    public function saveLead()
    {
        // Recupera i dati dal modulo di contatto
        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $message = $_POST['message'] ?? '';

        // Validazione dei dati
        if ($this->validate($name, $email, $message)) {
            // Crea un'istanza del modello Contact
            $contact = new Contact();
            $contact->name = $name;
            $contact->email = $email;
            $contact->message = $message;

            // Salva il contatto nel database
            if ($contact->save()) {
                echo json_encode(['status' => 'success', 'message' => 'Contatto salvato con successo.']);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'Errore nel salvataggio del contatto.']);
            }
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Dati non validi.']);
        }
    }

    private function validate($name, $email, $message)
    {
        // Esempio di validazione semplice
        return !empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($message);
    }
}