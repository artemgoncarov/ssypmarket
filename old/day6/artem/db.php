<?php

$pdo = new PDO("mysql:host=localhost;dbname=leskinavp_lsup;charset=utf8mb4", 'leskinavp_lsup', '6UP_6GjN');
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

function dbRead($query, $params = [])
{
    global $pdo;
    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function dbWrite($query, $params = [])
{
    global $pdo;
    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
}

$json = json_encode(dbRead("SELECT t1.name FROM artem_students t1 RIGHT JOIN artem_courses t2 ON t1.id = t2.student_id WHERE t2.course_name = 'Физика'"), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
// file_put_contents(__DIR__ . "/products.json", $json);

echo file_get_contents("https://auzubarev.ru/day4/artem");