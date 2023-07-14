<?php
require_once(__DIR__."/../parts/header_clean.php");
?>
    <script>
        if(cartStorage.getLength() !== 0){
              location.href = '/checkout/';
        }
    </script>
    <div id="content" class="container">
        <div class="text-center">
            
            <h1>Ваша корзина пуста.</h1> 
            <img class = "mb-1" src = /public/img/empty.jpg> 
            <div> <a class = "b-1 b-primary" href="/">Главная</a> </div>
        </div>
    </div>
    
<?php
require_once(__DIR__."/../../parts/foot.php");
?> 




