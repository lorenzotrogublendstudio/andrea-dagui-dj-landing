<?php

class Controller {
    protected $request;
    protected $response;

    public function __construct($request, $response) {
        $this->request = $request;
        $this->response = $response;
    }

    protected function jsonResponse($data, $status = 200) {
        $this->response->setHeader('Content-Type', 'application/json');
        $this->response->setStatus($status);
        echo json_encode($data);
        exit;
    }

    protected function redirect($url) {
        header("Location: $url");
        exit;
    }

    protected function render($view, $data = []) {
        extract($data);
        include "../views/$view.php";
    }
}