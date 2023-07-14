<!doctype html>
<html lang="ru">

<head>
    <meta charset="utf-8" />
    <title>ЛШЮП маркет</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <?php
    require_once(__DIR__.'/db.php');
    $data = dbRead('SELECT t1.name, t2.course_name FROM michail_students t1 LEFT JOIN michail_courses t2 ON  t1.id = t2.student_id WHERE course_name = "Физика"');   
    echo $data[0]['name'];
    dbWrite('INSERT INTO michail_students (name, age) VALUES (:n, :a)', ['n' => $_GET['name'], 'a' => $_GET['age']]);
    ?> 
</body>

</html>