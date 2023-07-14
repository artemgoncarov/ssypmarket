<?php

require_once(__DIR__ . '/../../../api.php');
require_once(__DIR__.'/../../../const.php');

$req = request();
if ($req['password'] === ADMIN_PASSWORD) {
    $query = "DELETE FROM coupons WHERE id = :id";
    dbWrite($query, ["id" => $req["id"]]);
    return response(["result"=>"ok"]);
} else {
    return response(["result"=>"wrong_password"]);
}