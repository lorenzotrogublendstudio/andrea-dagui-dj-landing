<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class EmailService {
    private $mailer;

    public function __construct() {
        $this->mailer = new PHPMailer(true);
        
        try {
            // Configurazione SMTP (Identica per entrambe le mail)
            $this->mailer->isSMTP();
            $this->mailer->Host       = $_ENV['SMTP_HOST'] ?? 'localhost';
            $this->mailer->SMTPAuth   = true;
            $this->mailer->Username   = $_ENV['SMTP_USER'] ?? '';
            $this->mailer->Password   = $_ENV['SMTP_PASS'] ?? '';
            
            $secure = $_ENV['SMTP_SECURE'] ?? 'ssl';
            if ($secure === 'ssl') {
                $this->mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            } elseif ($secure === 'tls') {
                $this->mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            } else {
                $this->mailer->SMTPSecure = '';
                $this->mailer->SMTPAutoTLS = false;
            }

            $this->mailer->Port       = $_ENV['SMTP_PORT'] ?? 465;
            
            // Impostazioni predefinite Mittente
            $fromEmail = $_ENV['SMTP_FROM_EMAIL'] ?? 'info@admusic.it';
            $fromName = $_ENV['SMTP_FROM_NAME'] ?? 'AD Music';
            $this->mailer->setFrom($fromEmail, $fromName);

            $this->mailer->CharSet = 'UTF-8';
            $this->mailer->isHTML(true);

        } catch (Exception $e) {
            error_log("Errore configurazione Mailer: " . $e->getMessage());
        }
    }

    // --- 1. NOTIFICA ALL'AMMINISTRATORE (Andrea) ---
    public function sendLeadNotification($contactData) {
        try {
            $this->mailer->clearAddresses(); // Pulisce destinatari precedenti
            $this->mailer->addAddress($_ENV['SMTP_USER']); // Invia a te stesso

            // Imposta Reply-To: rispondendo a questa mail, scrivi direttamente al cliente
            $this->mailer->addReplyTo($contactData['email'], $contactData['name']);

            $this->mailer->addCC($_ENV['SMTP_CC_EMAIL'] ?? '');

            $this->mailer->Subject = '🎹 Nuovo Lead dal Sito: ' . $contactData['name'];
            $this->mailer->Body    = $this->getAdminHtmlTemplate($contactData);
            $this->mailer->AltBody = $this->getAdminTextTemplate($contactData);

            $this->mailer->send();
            return true;
        } catch (Exception $e) {
            error_log("Errore invio admin email: " . $this->mailer->ErrorInfo);
            return false;
        }
    }

    // --- 2. CONFERMA AL CLIENTE (User) ---
    public function sendUserConfirmation($contactData) {
        try {
            $this->mailer->clearAddresses(); // Importante!
            $this->mailer->clearReplyTos();
            $this->mailer->clearCCs(); // <--- AGGIUNGI QUESTA RIGA
            $this->mailer->addAddress($contactData['email']); // Invia al cliente


            $this->mailer->Subject = 'Grazie per avermi contattato! 🎵';
            $this->mailer->Body    = $this->getUserHtmlTemplate($contactData);
            $this->mailer->AltBody = $this->getUserTextTemplate($contactData);

            $this->mailer->send();
            return true;
        } catch (Exception $e) {
            error_log("Errore invio user email: " . $this->mailer->ErrorInfo);
            return false;
        }
    }

    // --- TEMPLATE AMMINISTRATORE ---
    private function getAdminHtmlTemplate($data) {
        $dateFormatted = $data['event_date'] ? date('d/m/Y', strtotime($data['event_date'])) : 'Non specificata';
        
        return "
        <div style='font-family: Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;'>
            <div style='background: linear-gradient(135deg, #d02894 0%, #a855f7 100%); padding: 20px; text-align: center; color: white;'>
                <h2 style='margin:0;'>NUOVO CONTATTO</h2>
            </div>
            <div style='padding: 20px; background-color: #fff; color: #333;'>
                <p>Hai ricevuto una richiesta da <strong>{$data['name']}</strong>.</p>
                <p><strong>Email:</strong> <a href='mailto:{$data['email']}' style='color:#d02894;'>{$data['email']}</a></p>
                <p><strong>Data Evento:</strong> {$dateFormatted}</p>
                <div style='background-color: #f9f9f9; border-left: 4px solid #d02894; padding: 15px; margin-top: 15px;'>
                    " . nl2br(htmlspecialchars($data['message'])) . "
                </div>
            </div>
        </div>";
    }

    private function getAdminTextTemplate($data) {
        return "Nuovo Contatto:\nNome: {$data['name']}\nEmail: {$data['email']}\nMsg: {$data['message']}";
    }

    // --- TEMPLATE CLIENTE ---
    private function getUserHtmlTemplate($data) {
        return "
        <div style='font-family: Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;'>
            <div style='background-color: #ffffff; padding: 20px; text-align: center; border-bottom: 2px solid #d02894;'>
                <h1 style='color: #333; margin: 0; font-size: 24px;'>Grazie {$data['name']}!</h1>
            </div>
            <div style='padding: 30px; background-color: #fcfcfc; color: #555; line-height: 1.6;'>
                <p>Ho ricevuto la tua richiesta di informazioni.</p>
                <p>Ti risponderò al più presto per parlare dei dettagli del tuo evento e capire come rendere la musica indimenticabile.</p>
                
                <p style='margin-top: 30px;'>A presto,<br><strong>Andrea D'Aguì</strong><br><em>DJ & Music Planner</em></p>
                
                <div style='margin-top: 40px; text-align: center;'>
                    <a href='https://www.instagram.com' style='color: #d02894; text-decoration: none; margin: 0 10px;'>Instagram</a>
                    <a href='https://www.facebook.com' style='color: #d02894; text-decoration: none; margin: 0 10px;'>Facebook</a>
                </div>
            </div>
            <div style='background-color: #111; color: #666; text-align: center; padding: 15px; font-size: 11px;'>
                &copy; " . date('Y') . " Andrea D'Aguì Music
            </div>
        </div>";
    }

    private function getUserTextTemplate($data) {
        return "Ciao {$data['name']},\n\nHo ricevuto la tua richiesta. Ti risponderò al più presto!\n\nAndrea D'Aguì";
    }
}
?>