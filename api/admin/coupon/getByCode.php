<?php

require_once(__DIR__ . '/../../../api.php');
require_once(__DIR__.'/../../../const.php');

$req = request();

$query = "SELECT * FROM coupons WHERE code=:code";
if (dbRead($query, ["code" => $req["code"]])) {
    response([
        "result"=>true, 
        "items"=> dbRead($query, ["code" => $req["code"]])
    ]);
} else {
    response([
        "result"=>false, 
        "items"=> dbRead($query, ["code" => $req["code"]])
    ]);
}