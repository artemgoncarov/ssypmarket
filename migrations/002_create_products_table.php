<?php
require_once(__DIR__ . '/../api.php');
dbWrite("CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), img VARCHAR(255), short_description LONGTEXT, description LONGTEXT, sort_order INT, price INT, qty INT)");