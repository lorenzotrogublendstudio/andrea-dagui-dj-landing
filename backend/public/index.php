<?php
// ==========================================
// GESTIONE CORS GLOBALE
// ==========================================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ==========================================
// CARICAMENTO LIBRERIE COMPOSER (NUOVO)
// ==========================================
require_once '../vendor/autoload.php'; // <--- QUESTA RIGA È FONDAMENTALE

// ==========================================
// CONFIGURAZIONE E CARICAMENTO CORE
// ==========================================
require_once '../app/config/database.php';
require_once '../app/core/Controller.php';
require_once '../app/core/App.php';

// Models
require_once '../app/models/Contact.php';
require_once '../app/models/WhatsAppClick.php';

// ==========================================
// AVVIO APPLICAZIONE
// ==========================================
$app = new App();
?>