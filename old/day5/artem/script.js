let cardlist = document.querySelector(".cardlist");
let card = document.querySelector(".card");

let json = '[{"name":"Шоколад","img":"https://auzubarev.ru/day4/public/shokolad.jpg","price":70.5},{"name":"Кофе","img":"https://auzubarev.ru/day4/public/kofe.jpg","price":15},{"name":"Вода","img":"https://auzubarev.ru/day4/public/water.jpg","price":26},{"name":"Булочка","img":"https://auzubarev.ru/day4/public/bulochki.jpg","price":35}]';

let t = JSON.parse(json);

for (i of t) {
    card1 = card.cloneNode(true);
    let cardname = card1.querySelector(".name");
    let cardimg = card1.querySelector(".image");
    let cardprice = card1.querySelector(".price");
    cardlist.appendChild(card1);
    cardname.textContent = i.name;
    cardprice.textContent = i.price + " руб.";
    cardimg.setAttribute("src", i.img);
    cardbuy = document.querySelector(".gradient-button");
}
card.style.display = "none";

function add_to_buy() {
    let isAccept = confirm("Добавить товар в корзину?");
    if (isAccept === true) {
        location.href = "https://auzubarev.ru/day5/artem";
    }
}

