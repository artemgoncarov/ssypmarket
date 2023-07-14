<?php
require_once(__DIR__ . '/../api.php');


dbWrite("CREATE TABLE coupons (id INT PRIMARY KEY AUTO_INCREMENT, code VARCHAR(255), value INTEGER, is_valid BOOLEAN)");
