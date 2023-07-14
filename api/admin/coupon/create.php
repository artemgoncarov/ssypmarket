<?php
require_once(__DIR__ . '/../../../api.php');
require_once(__DIR__.'/../../../const.php');

$req = request();
if ($req['password'] === ADMIN_PASSWORD) {
    $query = "INSERT INTO coupons (code, value, is_valid) VALUES (:code, :value, :is_valid)";
    dbWrite($query, [
        "code" => $req['code'],
        "value" => $req['value'],
        "is_valid" => true
    ]);
    return response(["result"=>"ok"]);
} else {
    return response(["result"=>"wrong_password"]);
}