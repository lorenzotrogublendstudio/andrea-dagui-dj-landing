<?php
// ... CORS header ... (rimangono uguali)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once '../vendor/autoload.php';

require_once '../app/config/database.php';
require_once '../app/core/Controller.php';
require_once '../app/core/App.php';

require_once '../app/models/Contact.php';
require_once '../app/models/WhatsAppClick.php';

// --- AGGIUNTA NUOVA ---
require_once '../app/services/EmailService.php'; 
// ---------------------

$app = new App();
?>