<template id="js-list-template">
    <div class="js-list row-3 g-2"> </div>
</template>
<template id="js-list-item-template">
    <div class="js-div bg-secondary-container span-1 p-2 mob-span-3 radius">
        <div class="flex flex-column justify-between">
            <div>
            <a class="js-img-link" href="/product/?id="><div class="js-name text-bold text-center text-1-5 mb-1"> </div></a>
                <a class="js-img-link1" href="/product/?id="><img class="js-img radius mb-2 w-100" href =""></a>
                <div class="js-descr mb-1"> </div>
            </div>
            <div>
                <div class="js-div1 text-1-5 mb-1">Цена: <span class="js-price"></span> б.</div>
                <div class="js-btn-add b-1 b-primary "> Купить </div>
                <div class="js-btn-to-car">
                <a href="/checkout/"><div class=" b-1 b-outline ">В корзине</div></a> 
                </div>
                
                <div class="js-btn-no-qty ">Нет в наличии</div> 
            </div>
        </div>
    </div>
</template>