// class CartItem {
//     #quantity
//     constructor (name, quantity = 100){
//         if (quantity < 1){
//             this.#quantity = 1;
//         }
//         else{
//             this.#quantity = quantity;
//         }
//         this.name = name;
//     }
//     get quantity(){
//         return this.#quantity;
//     }
//     set quantity(num){
//         if (num < 1){
//             this.#quantity = 1;
//         }
//         else{
//             this.#quantity = num;
//         }
//     }
// }
// cart1 = new CartItem("Вода Aqua Minerale", 1000);
// cart2 = new CartItem("Снэки Lays со сметаной и луком", 500);
// cart3 = new CartItem("Снэки Lays с солью", 750);
// let cartArr = [cart1, cart2, cart3];
// let jsonLine = JSON.stringify(cartArr);
// console.log(jsonLine);
// setInterval(() => {console.log("Hello!")}, 3000);
// setInterval(() => {console.log("World!")}, 1000);

// document.getElementById(); // позволяет получить элемент по ID
// document.getElementsByTagName(); // позволяет получить массив элементов по названию тэга
// document.querySelector(); // выбирает элемент по селектору css
// document.querySelectorAll(); // выбирает все элемент по селектору css, возвращает массив

// Element.tagName
// Element.setAttribute("id", "#11");
// Element.getAttribute("id");
// Element.removeAttribut("id");
// Element.offsetWidth // ширина
// Element.offsetHeight // высота
// Element.querySelector();
// Element.appendChild(); // добавление дочернего элемента
// el = document.getElementById("#11");
// el.style.color
// el.innerText // текст, установленный внутри элемента
// el.innerHTML // код, установленный внутри элемента
// el.classList.add(); // добавить класс в список классов элемента
// el.classList.remove(); // удалить класс из списка классов элемента
// el.classList.toggle(); // добавить, если нет и удалить, если есть класс из списока классов элемента

let cardList = document.querySelector(".cardList");
let card = document.querySelector(".card");
let json1 = '[{"name":"Шоколад","img":"shokolad.jpg","price":70.5},{"name":"Кофе","img":"kofe.jpg","price":15},{"name":"Вода","img":"water.jpg","price":26},{"name":"Булочка","img":"bulochki.jpg","price":35}]';
let jsObj1 = JSON.parse(json1);
for (i of jsObj1){
    card1 = card.cloneNode(true);
    card1.querySelector(".cardName").innerText = i["name"];
    card1.querySelector(".cardImage").setAttribute("src", ("/day4/public/" + i["img"]));
    card1.querySelector(".cardPrice").innerText = i["price"];
    cardList.appendChild(card1);
}

// el.addEventListener("click", (event) => {location.href("https://www.codewars.com")});
// el.removeEventListener("click", (event) => {location.href("https://www.codewars.com")});
// event - объект события
// event.target - ссылка на элемент, на который кликнули
// event.prevenDefault() - остановить действия браузера

// "mousedown" - начало клика 
// "click" - сам клик
// "mouseup" - конец клика
// "mouseover" - наводим курсор
// "mousemove" - двигаем курсор
// "mouseout" - отвели курсор

// "keydown" - начало нажатия клавиши
// "keypress" - само зажатие клавиши
// "keyup" - конец нажатия клавиши

// "submit" - подтверждение формы
// event.code - код клавиши, которую нажал пользователь
cardBasket = [];
buttons = document.querySelectorAll(".cardButton");
for (i of buttons){
    i.addEventListener("click", (event) => {console.log("Поздравляю! Вы купили " + event.target.parentNode.querySelector(".cardName").innerText)});
    i.addEventListener("click", (event) => {cardBasket.push(event.target.parentNode)});
}
document.querySelector("#finishButton").addEventListener("click", (event) => {localStorage.setItem("basketKey", cardBasket)});

// document.cookie = "user=name";
// localStorage.setItem(key, value);
// localStorage.getItem(key);
// localStorage.removeItem(key);
// localStorage.clear();