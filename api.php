<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once(__DIR__ . '/db.php');
require_once(__DIR__.'/const.php');
function request() {
    return json_decode(file_get_contents('php://input'), true);
}

function response($arr){
    echo json_encode($arr, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
}