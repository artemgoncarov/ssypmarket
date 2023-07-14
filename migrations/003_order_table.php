<?php
require_once(__DIR__ . '/../api.php');
dbWrite("CREATE TABLE order_table (id INT AUTO_INCREMENT PRIMARY KEY, order_date DATETIME, products VARCHAR(255), order_name VARCHAR(255), email VARCHAR(255), phone VARCHAR(255), order_status VARCHAR(255))");