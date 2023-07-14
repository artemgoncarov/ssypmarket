<!doctype html>
<html lang="ru">

<head>
    <meta charset="utf-8" />
    <title>ЛШЮП маркет</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <style>

    </style>
    <script>

    </script>


    <?php
    require_once(__DIR__."/db.php");
    echo dbRead("SELECT t1.name FROM semen_students t1 RIGHT JOIN semen_courses t2 ON t1.id = t2.student_id WHERE t2.course_name = 'Физика'")[0]["name"];
    ?>
</body>

</html>