<?php

require_once(__DIR__ . '/../../api.php');
require_once(__DIR__.'/../../const.php');

$req = request();
$products = [];
$productsNames = [];
foreach($req['products'] as $id) {
    $data = dbRead("SELECT * FROM products WHERE id = :id",["id" => $id]);
    if($data) {
        $products[] = $data[0];
        $productsNames[] =  $data[0]['name'];
    }
}
$sum = 0;
foreach($products as $value)  {
    if($value['qty']!==0){
        $sum+= $value['price'];
    }
}
if($sum === 0){
    response(["result"=>"no_qrt"]);
}else{
    $data = dbRead("SELECT value FROM coupons WHERE code = :code",["code" => $req["coupon_code"] ] );
    if(!$data){
        response(["result"=>"no_money"]);
    } else {
        $couponSum = $data[0]['value'];
        $couponCode = $req["coupon_code"];
        if($sum > $couponSum){
            response(["result"=>"no_money"]);
        } else {
            $couponSum -= $sum;
            dbWrite("UPDATE coupons SET value = :codeSum  WHERE code = :code", ["code" => $couponCode,"codeSum" => $couponSum]);
            $mailText = "IP: ".$_SERVER['SERVER_ADDR']."\n"."Имя: ".$req['name']."\n"."Номер телефона: ".$req['phone']."\n"."Товары: ".implode(', ', $productsNames)."\n"."Комментарий: ".$req['comment'];
            mail('ssypmarket@gmail.com',"Новый заказ",$mailText);
            dbWrite("INSERT INTO order_table (products, order_name, phone, order_status)  VALUES( :products, :name, :phone, :status)",
            ["products"=> implode(', ', $productsNames), "name"=> $req['name'], "phone"=> $req['phone'], "status"=> "new"]);
            foreach($products as $value)  {
                dbRead("UPDATE products SET qty = 0 WHERE id = :id",["id" => $value["id"]]);
            }
            response(["result"=>"ok"]);
        }
    }
}