<?php

class Controller {
    // Costruttore rimosso per evitare l'errore ArgumentCountError

    protected function jsonResponse($data, $status = 200) {
        http_response_code($status);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit;
    }

    protected function redirect($url) {
        header("Location: $url");
        exit;
    }

    protected function render($view, $data = []) {
        extract($data);
        // Assumiamo che le view siano nella cartella views parallela ad app
        if (file_exists("../app/views/$view.php")) {
            include "../app/views/$view.php";
        } else {
            die("View $view not found");
        }
    }
}
?>