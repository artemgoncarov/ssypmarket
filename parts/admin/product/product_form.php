<template id="js-product-form-template">
    <form class="js-product-form mb-2">
        <input type="text" placeholder="Имя" class="js-name input mb-1">
        </input>
        <input type="text" placeholder="Изображение" class="js-img input mb-1">
        </input>
        <textarea placeholder="Короткое описание" class="js-small-description input mb-1"></textarea>
        <textarea placeholder="Описание" class="js-description input mb-1"></textarea>
        <input type="number" placeholder="Сортировка" class="js-sort-order input mb-1">
        </input>
        <input type="number" placeholder="Цена" class="js-price input mb-1">
        </input>
        <input type="number" placeholder="Кол-во" class="js-qty input mb-1">
        </input>
        <button type="submit", class="js-btn b-1 b-primary mb-1">
            Создать
        </button>
        <div class="js-show-all b-1 ml-1 b-secondary">Показать все</div>
    </form>
    <table class="table">
        <thead>
            <tr>
                <th>Название</th>
                <th>Цена</th>
                <th>Удалить</th>
            </tr>
        </thead>
        <tbody class="js-product-list"></tbody>
    </table>
</template>