<template id="js-form-template">
    <form class="js-coupon-form mb-2" method="POST">
        <input required class="js-code input mb-1" type="text" placeholder="Код">
        <input required class="js-value input mb-1" type="number" input placeholder="Номинал">
        <button type="submit" class="js-button b-1 b-primary">Отправить</button>
        <div class="js-show-all b-1 ml-1 b-secondary">Показать все</div>
    </form>
    <table class="table">
        <thead>
            <tr>
                <th>Код</th>
                <th>Номинал</th>
                <th>Удалить</th>
            </tr>
        </thead>
        <tbody class="js-coupon-list"></tbody>
    </table>
</template>