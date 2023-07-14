<!doctype html>
<html lang="ru">

<head>
    <meta charset="utf-8" />
    <title>ЛШЮП маркет</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <span style = 'color:green'>
    
    <?php
    // echo(pow($_GET['x'],pow($_GET['y'],$_GET['z'])));
    // // var_export($_GET['x']);
    // CREATE TABLE users_daniil(
    //     id INT PRIMARY KEY AUTO_INCREMENT,
    //     name VARCHAR(255) NOT NULL,
    //     age INT DEFAULT = 0
    // )
    // INSERT INTO users_daniil (name, age) VALUE('Alex',123);
    require_once(__DIR__.'/db.php');
    // require_once(__DIR__.'/alert.js');
    // var_export(dbRead('Select t1.name FROM daniil_students t1 LEFT JOIN daniil_courses t2 ON t1.id = t2.student_id WHERE t2.course_name = :r;', 
    // ['r' => 'Математика']  ));
    $name = ($_GET['name']);
    // echo $name;
    // $img = ($_GET['img']);
    $cost = ($_POST['cost']);

    // echo $age;
    dbWrite('INSERT INTO daniil_products (name, cost)  VALUES('.$name.', '.$cost.') ');
    ?>
    </span>
</body>

</html>