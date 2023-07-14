<?php

require_once(__DIR__ . '/../../api.php');
require_once(__DIR__.'/../../const.php');

$req = request();
$query = "SELECT * FROM products WHERE 1 ORDER BY qty DESC, price, sort_order";
response(dbRead($query),);
