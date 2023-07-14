<?php

require_once(__DIR__ . '/../../../api.php');
require_once(__DIR__.'/../../../const.php');

$req = request();
sleep(5);
$query = "SELECT value FROM coupons WHERE code=:code";
$data = dbRead($query, ["code" => $req["code"]]);
if ($data) {
    response(["result"=>"ok", "items"=>$data]);
} else {
    response(["result"=>"error"]);
}