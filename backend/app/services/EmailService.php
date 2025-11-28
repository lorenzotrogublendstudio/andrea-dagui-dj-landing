<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class EmailService {
    private $mailer;

    public function __construct() {
        $this->mailer = new PHPMailer(true);
        
        // --- CONFIGURAZIONE SMTP (Da compilare con i dati reali di SiteGround/Gmail) ---
        $this->mailer->isSMTP();
        $this->mailer->Host       = 'smtp.tuodominio.it'; // Es. mail.admusic.it
        $this->mailer->SMTPAuth   = true;
        $this->mailer->Username   = 'info@admusic.it';    // La tua mail
        $this->mailer->Password   = 'LaTuaPassword';      // La tua password
        $this->mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // O ENCRYPTION_STARTTLS
        $this->mailer->Port       = 465; // O 587
        
        // Mittente e Codifica
        $this->mailer->setFrom('info@admusic.it', 'AD Music Notifiche');
        $this->mailer->CharSet = 'UTF-8';
        $this->mailer->isHTML(true);
    }

    public function sendLeadNotification($contactData) {
        try {
            // Destinatario (Andrea)
            $this->mailer->addAddress('info@admusic.it', 'Andrea D\'Aguì');
            // Opzionale: aggiungi copia nascosta
            // $this->mailer->addBCC('admin@blendstudio.it');

            $this->mailer->Subject = '🎹 Nuovo Contatto dal Sito: ' . $contactData['name'];
            $this->mailer->Body    = $this->getHtmlTemplate($contactData);
            $this->mailer->AltBody = $this->getTextTemplate($contactData);

            $this->mailer->send();
            return true;
        } catch (Exception $e) {
            // In produzione logga l'errore: $this->mailer->ErrorInfo
            return false;
        }
    }

    private function getHtmlTemplate($data) {
        $dateFormatted = $data['event_date'] ? date('d/m/Y', strtotime($data['event_date'])) : 'Non specificata';
        
        return "
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: 'Helvetica', 'Arial', sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #d02894 0%, #a855f7 100%); padding: 30px; text-align: center; color: white; }
                .header h1 { margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; }
                .content { padding: 30px; color: #333333; }
                .label { font-size: 12px; color: #888; text-transform: uppercase; margin-top: 15px; font-weight: bold; }
                .value { font-size: 16px; margin-top: 5px; color: #000; font-weight: 500; }
                .message-box { background-color: #f9f9f9; border-left: 4px solid #d02894; padding: 15px; margin-top: 20px; font-style: italic; }
                .footer { background-color: #1a1a1a; color: #666; text-align: center; padding: 15px; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>Nuova Richiesta ✨</h1>
                </div>
                <div class='content'>
                    <p>Ciao Andrea, hai ricevuto una nuova richiesta di preventivo dal sito web.</p>
                    
                    <div class='label'>Nome</div>
                    <div class='value'>{$data['name']}</div>
                    
                    <div class='label'>Email</div>
                    <div class='value'><a href='mailto:{$data['email']}' style='color: #d02894; text-decoration: none;'>{$data['email']}</a></div>
                    
                    <div class='label'>Data Evento</div>
                    <div class='value'>📅 {$dateFormatted}</div>
                    
                    <div class='label'>Messaggio</div>
                    <div class='value message-box'>
                        " . nl2br(htmlspecialchars($data['message'])) . "
                    </div>
                    
                    <div style='text-align: center; margin-top: 30px;'>
                        <a href='mailto:{$data['email']}?subject=Risposta%20preventivo%20AD%20Music' style='background-color: #d02894; color: white; padding: 12px 25px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;'>Rispondi Ora</a>
                    </div>
                </div>
                <div class='footer'>
                    &copy; " . date('Y') . " Andrea D'Aguì Music - Lead System
                </div>
            </div>
        </body>
        </html>
        ";
    }

    private function getTextTemplate($data) {
        $dateFormatted = $data['event_date'] ? date('d/m/Y', strtotime($data['event_date'])) : 'Non specificata';
        return "Nuova Richiesta dal Sito\n\nNome: {$data['name']}\nEmail: {$data['email']}\nData: {$dateFormatted}\n\nMessaggio:\n{$data['message']}";
    }
}
?>