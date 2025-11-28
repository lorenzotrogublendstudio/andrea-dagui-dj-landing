<?php
// Assicurati che le variabili d'ambiente siano caricate (lo fa index.php)
$host = $_ENV['DB_HOST'] ?? 'localhost';
$dbname = $_ENV['DB_NAME'] ?? 'andrea_dagui';
$username = $_ENV['DB_USER'] ?? 'root';
$password = $_ENV['DB_PASS'] ?? '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // In produzione, meglio non mostrare l'errore dettagliato
    die(json_encode(['status' => 'error', 'message' => 'Database Connection Error']));
}
?>