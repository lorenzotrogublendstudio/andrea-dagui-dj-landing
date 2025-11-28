<?php
// ==========================================
// 1. GESTIONE CORS GLOBALE
// ==========================================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ==========================================
// 2. CARICAMENTO LIBRERIE E ENV
// ==========================================
require_once '../vendor/autoload.php';

// Carica le variabili d'ambiente dal file .env
// dirname(__DIR__) punta alla cartella 'backend'
$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->safeLoad(); // safeLoad non rompe tutto se il file .env manca

// ==========================================
// 3. CONFIGURAZIONE E CORE
// ==========================================
require_once '../app/config/database.php';
require_once '../app/core/Controller.php';
require_once '../app/core/App.php';

// Models
require_once '../app/models/Contact.php';
require_once '../app/models/WhatsAppClick.php';

// Services
require_once '../app/services/EmailService.php';

// ==========================================
// 4. AVVIO APPLICAZIONE
// ==========================================
$app = new App();
?>