<?php
require_once(__DIR__ .'/../../../api.php');
require_once(__DIR__.'/../../../const.php');
 
$req = request();
if ($req['password'] === ADMIN_PASSWORD) {
    $query = "INSERT INTO products 
    (name, img, short_description, description, sort_order, price, qty)
     VALUES (:name, :img, :short_description, :description, :sort_order,  :price, :qty)";
    dbWrite($query, [
        "name" => $req['name'],
        "img" => $req['img'],
        "short_description" => $req['short_description'],
        "description" => $req['description'],
        "sort_order" => $req['sort_order'],
        "price" => $req['price'],
        "qty" => 1
    ]);
    return response(["result"=>"ok"]);
} else {
    return response(["result"=>"wrong_password"]);
}
