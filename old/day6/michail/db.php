<?php

$pdo = new PDO("mysql:host=localhost;dbname=leskinavp_lsup;charset=utf8mb4", 'leskinavp_lsup', '6UP_6GjN');
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

function dbRead($query,  $params = []) {
    global $pdo;
    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function dbWrite($query, $params = []) {
    global $pdo;
    $stmt = $pdo->prepare($query); 
    $stmt->execute($params);
}