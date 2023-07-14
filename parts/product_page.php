<template  id="js-product-page-template">
<div class="js-name text-bold text-3 mb-1"></div>
        <div class="row-3 g-3  ">
                <img class="js-img span-1 w-100 radius mb-2 mob-span-3">
                
                <div class="span-2 bg-secondary-container radius p-2 mob-span-3">
                        <div data-id="<?php echo $_GET['id']?>" class="js-id"></div>
                        <div class="js-description textarea"> </div>
                        <div class="js-div1 text-1-5 mb-1">Цена: <span class="js-price"></span> б.</div>
                        <div class="js-qty"></div>
                        <button class="js-buy b-1 b-primary button">Купить</button>
                        <div class="js-non b-1 b-primary button">Нет в наличии</div>
                        <a href="/checkout/"><button class="js-already-in b-1 b-outline button">В корзине</button></a>
                </div>
        </div>
</template>