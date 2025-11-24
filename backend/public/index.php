<?php
// ==========================================
// GESTIONE CORS GLOBALE
// ==========================================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

// Gestione preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ==========================================
// CONFIGURAZIONE E CARICAMENTO
// ==========================================

// 1. Configurazione Database
require_once '../app/config/database.php';

// 2. Core (Base Classes)
require_once '../app/core/Controller.php';
require_once '../app/core/App.php';

// 3. Models (Includili qui per renderli disponibili ovunque)
require_once '../app/models/Contact.php';
require_once '../app/models/WhatsAppClick.php';

// ==========================================
// AVVIO APPLICAZIONE
// ==========================================
$app = new App();
?>