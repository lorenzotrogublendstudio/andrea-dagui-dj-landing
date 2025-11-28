<?php

class App {
    protected $controller = 'HomeController';
    protected $method = 'index';
    protected $params = [];
    protected $baseDir;

    public function __construct() {
        // backend/app/core -> backend/app -> backend
        $this->baseDir = dirname(dirname(__DIR__)); 
        
        $this->parseUrl();
        $this->loadController();
        $this->loadMethod();
        $this->callMethod();
    }

    protected function parseUrl() {
        $url = null;

        if (isset($_GET['url'])) {
            $url = rtrim($_GET['url'], '/');
        } elseif (isset($_SERVER['REQUEST_URI'])) {
            $url = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
        }

        if ($url) {
            $url = filter_var($url, FILTER_SANITIZE_URL);
            $this->params = explode('/', $url);

            // Costruisci percorso assoluto per verificare il file
            $controllerName = ucfirst($this->params[0]) . 'Controller';
            $controllerPath = $this->baseDir . '/app/controllers/' . $controllerName . '.php';

            if (isset($this->params[0]) && file_exists($controllerPath)) {
                $this->controller = $controllerName;
                unset($this->params[0]);
            }
        }
        
        $this->params = $this->params ? array_values($this->params) : [];
    }

    protected function loadController() {
        $controllerFile = $this->baseDir . '/app/controllers/' . $this->controller . '.php';
        
        if (file_exists($controllerFile)) {
            require_once $controllerFile;
            $this->controller = new $this->controller;
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Controller non trovato: ' . $this->controller]);
            exit;
        }
    }

    protected function loadMethod() {
        if (isset($this->params[0])) {
            if (method_exists($this->controller, $this->params[0])) {
                $this->method = $this->params[0];
                unset($this->params[0]);
            }
        }
        $this->params = $this->params ? array_values($this->params) : [];
    }

    protected function callMethod() {
        if (method_exists($this->controller, $this->method)) {
            call_user_func_array([$this->controller, $this->method], $this->params);
        } else {
            http_response_code(404);
            echo json_encode(['status' => 'error', 'message' => 'Metodo non trovato: ' . $this->method]);
            exit;
        }
    }
}
?>