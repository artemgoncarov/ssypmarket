<?php $v = time(); ?>
<!doctype html>
<html lang="ru">

<head>
    <meta charset="utf-8" />
    <title>ЛШЮП маркет</title>
    <link rel="stylesheet" href="./public/css/atomic.css?v=<?php echo $v; ?>" />
    <link rel="stylesheet" href="./public/css/elements.css?v=<?php echo $v; ?>" />
    <script src="./public/js/api.js?v=<?php echo $v; ?>"></script>
    <script src="./public/js/storage.js?v=<?php echo $v; ?>"></script>
    <script src="./public/js/cart_storage.js?v=<?php echo $v; ?>"></script>
    <script src="./public/js/component.js?v=<?php echo $v; ?>"></script>
    <script src="./public/js/products_component.js?v=<?php echo $v; ?>"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

    <template id="js-products">
        <div class="js-products row-4 g-2"></div>
    </template>
    

    <template id="js-product-card">
        <div class="js-product-card span-1 mob-span-4 p-2 border radius bg-primary-container">
            <div class="js-name text-2 mb-2"></div>
            <img class="js-img w-100" src="" alt="">
            <div class="js-price"></div>
            <div class="js-btn b-1 b-primary">Купить</div>
            <div class="js-korz b-1 d-none">Товар в корзине</div>
        </div>
    </template>
    
    <script>
        //let r = document.querySelector(".js-product-card").cloneNode(true).querySelector(".js-btn");
        //let el = document.querySelector(".js-product-card");
        //cl = el.cloneNode(true);
        //let r = cl.querySelector(".js-btn");
        //r.addEventListener("click", event => {alert("Товар добавлен в корзину")});
        Api.post('./public/json/products.json').then((data) => {
            new ProductsComponent(document.body, data);
        });
    
    </script>
</body>

</html>