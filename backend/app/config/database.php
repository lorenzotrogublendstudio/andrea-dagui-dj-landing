<?php
$host = 'localhost'; // Host del database
$dbname = 'andrea_dagui_landing'; // Nome del database
$username = 'root'; // Nome utente del database
$password = 'Lorenzo2003'; // Password del database

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>