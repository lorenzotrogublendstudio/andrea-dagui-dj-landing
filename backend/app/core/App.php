<?php

class App {
    protected $controller = 'HomeController';
    protected $method = 'index';
    protected $params = [];

    public function __construct() {
        $this->parseUrl();
        $this->loadController();
        $this->loadMethod(); // <--- NUOVO STEP FONDAMENTALE
        $this->callMethod();
    }

    protected function parseUrl() {
        $url = null;

        if (isset($_GET['url'])) {
            $url = rtrim($_GET['url'], '/');
        } elseif (isset($_SERVER['REQUEST_URI'])) {
            // Fallback per server PHP built-in
            $url = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
        }

        if ($url) {
            $url = filter_var($url, FILTER_SANITIZE_URL);
            $this->params = explode('/', $url);

            // 1. Trova il Controller (prima parte URL)
            if (isset($this->params[0]) && file_exists('../app/controllers/' . ucfirst($this->params[0]) . 'Controller.php')) {
                $this->controller = ucfirst($this->params[0]) . 'Controller';
                unset($this->params[0]);
            }
        }
        
        // Riordina gli indici dell'array params
        $this->params = $this->params ? array_values($this->params) : [];
    }

    protected function loadController() {
        $controllerFile = '../app/controllers/' . $this->controller . '.php';
        
        if (file_exists($controllerFile)) {
            require_once $controllerFile;
            $this->controller = new $this->controller;
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Controller non trovato: ' . $this->controller]);
            exit;
        }
    }

    // 2. Trova il Metodo (seconda parte URL)
    protected function loadMethod() {
        if (isset($this->params[0])) {
            if (method_exists($this->controller, $this->params[0])) {
                $this->method = $this->params[0];
                unset($this->params[0]);
            }
        }
        // I parametri rimanenti sono gli argomenti da passare al metodo
        $this->params = $this->params ? array_values($this->params) : [];
    }

    protected function callMethod() {
        if (method_exists($this->controller, $this->method)) {
            call_user_func_array([$this->controller, $this->method], $this->params);
        } else {
            // Metodo non trovato
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Metodo non trovato: ' . $this->method]);
            exit;
        }
    }
}
?>