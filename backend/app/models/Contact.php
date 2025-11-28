<?php

class Contact {
    private $name;
    private $email;
    private $event_date; // Nuovo campo
    private $message;
    private $db;

    public function __construct($name = '', $email = '', $event_date = '', $message = '') {
        $this->name = $name;
        $this->email = $email;
        $this->event_date = $event_date;
        $this->message = $message;
        
        global $pdo;
        $this->db = $pdo;
    }

    public function getName() { return $this->name; }
    public function getEmail() { return $this->email; }
    public function getEventDate() { return $this->event_date; }
    public function getMessage() { return $this->message; }

    public function validate() {
        if (empty($this->name) || empty($this->email)) {
            return false;
        }
        if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }
        return true;
    }

    public function save() {
        if (!$this->db) return false;
        
        try {
            // Aggiornata la query per includere event_date
            $stmt = $this->db->prepare("INSERT INTO leads (name, email, event_date, message) VALUES (:name, :email, :event_date, :message)");
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':email', $this->email);
            // Se la data è vuota, salviamo NULL
            $dateToSave = empty($this->event_date) ? null : $this->event_date;
            $stmt->bindParam(':event_date', $dateToSave);
            $stmt->bindParam(':message', $this->message);
            return $stmt->execute();
        } catch (PDOException $e) {
            return false;
        }
    }
}
?>