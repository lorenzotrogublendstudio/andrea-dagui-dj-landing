<?php

class WhatsAppClick {
    private $sectionName;
    private $db;

    public function __construct($sectionName = null) {
        $this->sectionName = $sectionName;
        
        global $pdo;
        if (!$pdo) {
            error_log("ANALYTICS ERROR: Nessuna connessione PDO globale trovata."); // Logga errore connessione
            throw new Exception("Nessuna connessione al database attiva.");
        }
        $this->db = $pdo;
    }

    // Metodo per salvare il click
    public function save() {
        if (!$this->sectionName) {
            error_log("ANALYTICS ERROR: Nome sezione mancante.");
            return false;
        }
        
        try {
            $stmt = $this->db->prepare("INSERT INTO whatsapp_clicks (section_name) VALUES (:section_name)");
            $stmt->bindParam(':section_name', $this->sectionName);
            return $stmt->execute();
        } catch (PDOException $e) {
            // Logga l'errore SQL specifico
            error_log("ANALYTICS DB ERROR: " . $e->getMessage());
            return false;
        }
    }

    // ... (Il resto dei metodi rimane uguale) ...
    public function getTotalClicks() {
        try {
            $stmt = $this->db->query("SELECT COUNT(*) as total FROM whatsapp_clicks");
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result['total'] ?? 0;
        } catch (PDOException $e) {
            return 0;
        }
    }

    public function getClicksBySection() {
        try {
            $stmt = $this->db->query("SELECT section_name, COUNT(*) as count FROM whatsapp_clicks GROUP BY section_name ORDER BY count DESC");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return [];
        }
    }

    public function getAllClicks() {
        try {
            $stmt = $this->db->query("SELECT id, section_name, clicked_at FROM whatsapp_clicks ORDER BY clicked_at DESC");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return [];
        }
    }
}
?>