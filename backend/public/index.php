<?php
// --- INIZIO BLOCCO LOGGING DEBUG ---
// Abilita la visualizzazione degli errori (solo per debug momentaneo)
ini_set('display_errors', 0); // Teniamo 0 per non rompere il JSON frontend
ini_set('log_errors', 1);
// Definisci un file di log nella stessa cartella
ini_set('error_log', __DIR__ . '/debug_log.txt');

// Funzione per loggare tutto (anche i fatal error)
function shutdownHandler() {
    $error = error_get_last();
    if ($error !== NULL && $error['type'] === E_ERROR) {
        error_log("[CRITICAL ERROR] File: " . $error['file'] . " Line: " . $error['line'] . " Message: " . $error['message']);
        // Rispondi con un JSON valido anche in caso di crash per vedere l'errore in console (opzionale)
        header('Content-Type: application/json');
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Critical Server Error', 'debug' => $error['message']]);
    }
}
register_shutdown_function('shutdownHandler');
// --- FINE BLOCCO LOGGING DEBUG ---

// Definiamo la root del backend (un livello sopra 'public' se sei in locale, o __DIR__ se sei su server appiattito)
// ... Il resto del tuo codice originale ...
$baseDir = dirname(__DIR__); // O __DIR__ a seconda di come l'hai configurato sul server

// ...

// Definiamo la cartella base (che corrisponde alla cartella 'backend')
$baseDir = dirname(__DIR__); 

// ==========================================
// 1. GESTIONE ROUTING PER SERVER DI SVILUPPO (PHP -S)
// ==========================================
if (php_sapi_name() == 'cli-server') {
    $url  = parse_url($_SERVER['REQUEST_URI']);
    $file = $baseDir . '/public' . $url['path'];
    // Se il file esiste (immagini, css, js), servilo direttamente
    if (is_file($file)) {
        return false;
    }
}

// ==========================================
// 2. GESTIONE CORS GLOBALE
// ==========================================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ==========================================
// 3. CARICAMENTO LIBRERIE E ENV
// ==========================================
// Percorso assoluto al file autoload
$autoloadPath = $baseDir . '/vendor/autoload.php';

if (!file_exists($autoloadPath)) {
    http_response_code(500);
    // Stampiamo il percorso dove lo sta cercando per debug
    die(json_encode([
        'status' => 'error', 
        'message' => 'Vendor autoload mancante in: ' . $autoloadPath . '. Esegui composer install nella cartella backend.'
    ]));
}

require_once $autoloadPath;

// Carica le variabili d'ambiente usando il percorso assoluto
try {
    $dotenv = Dotenv\Dotenv::createImmutable($baseDir);
    $dotenv->safeLoad();
} catch (Exception $e) {
    // Ignoriamo errori se .env non esiste in produzione
}

// ==========================================
// 4. CONFIGURAZIONE E CORE
// ==========================================
require_once $baseDir . '/app/config/database.php';
require_once $baseDir . '/app/core/Controller.php';
require_once $baseDir . '/app/core/App.php';

// Models
require_once $baseDir . '/app/models/Contact.php';
require_once $baseDir . '/app/models/WhatsappClick.php';

// Services
require_once $baseDir . '/app/services/EmailService.php';

// ==========================================
// 5. AVVIO APPLICAZIONE
// ==========================================
$app = new App();
?>