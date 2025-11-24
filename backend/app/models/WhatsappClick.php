<?php

class WhatsAppClick {
    private $sectionName;
    private $db;

    public function __construct($sectionName) {
        $this->sectionName = $sectionName;
        // Recuperiamo la connessione al DB (assumendo che database.php istanzi $pdo)
        global $pdo; 
        $this->db = $pdo;
    }

    public function save() {
        try {
            $stmt = $this->db->prepare("INSERT INTO whatsapp_clicks (section_name) VALUES (:section_name)");
            $stmt->bindParam(':section_name', $this->sectionName);
            
            if ($stmt->execute()) {
                return true;
            }
            return false;
        } catch (PDOException $e) {
            // Log dell'errore se necessario
            return false;
        }
    }
}