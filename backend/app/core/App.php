<?php

class App {
    protected $controller = 'HomeController';
    protected $method = 'index';
    protected $params = [];

    public function __construct() {
        $this->parseUrl();
        $this->loadController();
        $this->callMethod();
    }

    protected function parseUrl() {
        if (isset($_GET['url'])) {
            $url = rtrim($_GET['url'], '/');
            $url = filter_var($url, FILTER_SANITIZE_URL);
            $this->params = explode('/', $url);
            if (isset($this->params[0]) && file_exists('../app/controllers/' . ucfirst($this->params[0]) . 'Controller.php')) {
                $this->controller = ucfirst($this->params[0]) . 'Controller';
                unset($this->params[0]);
            }
        }
    }

    protected function loadController() {
        require_once '../app/controllers/' . $this->controller . '.php';
        $this->controller = new $this->controller;
    }

    protected function callMethod() {
        if (method_exists($this->controller, $this->method)) {
            call_user_func_array([$this->controller, $this->method], $this->params);
        } else {
            // Handle method not found
        }
    }
}

new App();