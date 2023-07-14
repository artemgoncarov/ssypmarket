<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8" />
    <title>ЛШЮП Маркет</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/public/img/favicon.png" />

    <script src="https://kit.fontawesome.com/442a4b08b5.js" crossorigin="anonymous"></script>

    <?php
    $css_files = [
        '/public/css/atomic.css',
        '/public/css/elements.css'
    ];
    $js_files = [
        "/public/js/api.js",
        "/public/js/component.js",
        "/public/js/storage.js",
        "/public/js/storage_cart.js",
        "/public/js/storage_coupon.js",
        "/public/js/storage_password.js",
        "/public/js/admin/password_component.js",
        "/public/js/cart_components.js",
        "/public/js/product_components.js",
        "/public/js/checkout_components.js",
        "/public/js/admin/coupon_components.js",
        "/public/js/admin/product_components.js",
        "/public/js/product_page_components.js",
        "/public/js/storage_name.js",
        "/public/js/storage_phone.js",
    ];
    $v = time();
    foreach ($css_files as $css) {
        echo "<link rel='stylesheet' href='$css?v=$v' />";
    };
    foreach ($js_files as $js) {
        echo "<script src='$js?v=$v'></script>";
    };
    ?>
</head>

<body>
    <header>
        <div id='header'>
            <div class="container bg-secondary flex justify-between items-center">
                <a href="/" class="py-1 flex items-center">
                    <img class="active" height="40px" src="/public/img/logo.png" alt="">
                    <span class="pl-1 text-1-5  active"  style="text-decoration: none">ЛШЮП Маркет</span>
                </a>
                <div>
                    <a href="/checkout/" class="active p-1 js-cart-icon"></a>
                </div>
            </div>
        </div>
    </header>
    <?php
    require_once(__DIR__ . '/cart/cart.php');
    ?>
    <script>
        new CartButtonComponent();
    </script>