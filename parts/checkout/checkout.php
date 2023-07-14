<template id="js-checkout-template">
    <div class="js-all">
        <div class="js-cart-items"></div>
        <div class="js-coupon"></div>
        <form class="js-checkout">
            <input placeholder="Имя" required class="js-name input mb-1 mt-3" type="text">
            <input placeholder="Номер телефона" required class="js-phone input mb-1 mt-1" type="tel">
            <textarea placeholder="Комментарий к заказу" type="text" class="js-comment input mb-1 mt-1"></textarea>
            <div class="js-sum text-bold text-1-5">Сумма: <span class="js-summa"></span> б.<br></div>
            <div class="js-bal mt-1 text-bold text-1-5">Баланс: <span class="js-balance">0</span> б.<br></div>
            <button class="js-accept-button b-primary b-1 mt-1" type="submit">Оформить заказ</button>
        </form>
    </div>
    <div class="flex justify-center">
        <div class="bg-primary-container radius w-400 js-item-ok text-1-5 mt-3 p-3"><span>Ваш заказ оформлен.<br> Пожалуйста, заберите свой заказ в кабинете 3213,
                предъявив купон и назвав свой номер телефона.</span>
                <div class="mt-2">
                    <a href="/" class="b-primary b-1">Главная</a>
                </div>
            
        </div>
    </div>
</template>

<template id="js-cart-item-template">
    <div class="js-cart-item flex items-center mb-2 justify-between row-2 g-1">
        <div class="flex items-center span-1 mob-span-2">
            <a class="js-img-href" href="/product/?id=">
                <img height="100px" width="100px" class="js-img mr-1 radius"></img>
            </a>
            <a class="js-img-href1" href="/product/?id=">
                <div class="js-name text-1-5 mr-1"></div>
            </a>
            <br>
            <div class="js-stock text-1 mr-1 text-not text-bold">Нет в наличии</div>
        </div>
        <div class="flex items-center justify-end span-1 mob-span-2">
            <div class="js-price text-1-5 mr-1"></div>
            <button class="js-delete b-1 b-outline">Удалить товар</button>
        </div>


    </div>
</template>

<template id="js-coupon-form-template">
    <form class="js-coupon-form">
        <input placeholder="Код купона" required class="js-code input mt-1" type="text" name="Код купона">
        <div class="js-flaw mt-1">Купон не найден или на нем недостаточно баллов.</div>
        <div class="js-wait mt-1">
            <img src='/public/img/load.gif' class="mr-1" width="16px" height="16px">
            Пожалуйста, подождите, идет проверка купона.
        </div>
        <div class="js-ok mt-1">Купон добавлен</div>
        <button class="js-button b-secondary b-1 mt-1" type="submit">Применить</button>
    </form>
</template>