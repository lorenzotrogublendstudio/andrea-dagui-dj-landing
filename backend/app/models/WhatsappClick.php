<?php

class WhatsAppClick {
    private $sectionName;
    private $db;

    // Rendiamo $sectionName opzionale (default null) per quando dobbiamo solo leggere i report
    public function __construct($sectionName = null) {
        $this->sectionName = $sectionName;
        
        global $pdo;
        if (!$pdo) {
            throw new Exception("Nessuna connessione al database attiva.");
        }
        $this->db = $pdo;
    }

    // Metodo per salvare il click (già presente)
    public function save() {
        if (!$this->sectionName) return false; // Serve una sezione per salvare
        
        try {
            $stmt = $this->db->prepare("INSERT INTO whatsapp_clicks (section_name) VALUES (:section_name)");
            $stmt->bindParam(':section_name', $this->sectionName);
            return $stmt->execute();
        } catch (PDOException $e) {
            return false;
        }
    }

    // NUOVO: Conta i click totali
    public function getTotalClicks() {
        try {
            $stmt = $this->db->query("SELECT COUNT(*) as total FROM whatsapp_clicks");
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result['total'] ?? 0;
        } catch (PDOException $e) {
            return 0;
        }
    }

    // NUOVO: Conta i click raggruppati per sezione
    public function getClicksBySection() {
        try {
            $stmt = $this->db->query("SELECT section_name, COUNT(*) as count FROM whatsapp_clicks GROUP BY section_name ORDER BY count DESC");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return [];
        }
    }

    // NUOVO: Prende tutte le righe (raw data)
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