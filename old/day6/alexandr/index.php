<!doctype html>
<html lang="ru">

<head>
    <meta charset="utf-8" />
    <title>ЛШЮП маркет</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <pre> 
    <?php
        require_once(__DIR__.'/db.php');
 
        $r  = dbRead("SELECT t1.name, t2.course_name FROM alexandrstudents t1 LEFT join alexandr_courses t2 ON t1.id = t2.student_id where course_name = 'Физика'");
        echo $r[0][name];
        dbWrite('INSERT into alexandrstudents (name, AGE) VALUES (:n, :a)', ['n' => $_GET['name'], 'a' => $_GET['age']]);
        
    ?></pre>
</body>

</html>