// let json = '[{"name":"Шоколад","img":"shokolad.jpg","price":70.5},{"name":"Кофе","img":"kofe.jpg","price":15},{"name":"Вода","img":"water.jpg","price":26},{"name":"Булочка","img":"bulochki.jpg","price":35}]';

// let t = JSON.parse(json);
// for (i of t) {
//     console.log(i.name);
// }



// class CartItem {
//     #quantity = 1;
//     set quantity(q) {
//         this.#quantity = q;
//     }
//     get quantity() {
//         if (this.#quantity < 1) {
//             return 1;
//         } else {
//             return this.#quantity;
//         }
//     }
// }

// let c = new CartItem;

// console.log(c.quantity);
// c.quantity = 2;
// console.log(c.quantity);

// class Person {
//     #name = "Artem"
//     get name() {
//         return this.#name;
//     }
// }

// class Person {
//     name = "Artem";
// }

// let artem = new Person();
// let semen = new Person();

// semen.name = "Semen";

// let arr = [artem, semen];

// let j = JSON.stringify(arr);

// for (i of j) {
//     console.log(i);
// }
// console.log(j);

// Array

// every(func) - удовлетворяют ли все значения функции
// some(func) - только 1
// filter(func) - делает новую выборку
// forEach(func) - пребирает
// map(func) - присваивает значение

let json = '[{"name":"Шоколад","img":"shokolad.jpg","price":70.5},{"name":"Кофе","img":"kofe.jpg","price":15},{"name":"Вода","img":"water.jpg","price":26},{"name":"Булочка","img":"bulochki.jpg","price":35}]';

let t = JSON.parse(json);
function sortByLetter(letter, array) { array.filter(element => { return element.name.toLowerCase().includes(letter) }).forEach(element => { console.log(element.name) }); }
        //setInterval(() => { console.log("Hello") }, 3000);
        //setInterval(() => { console.log("Artem"); }, 1000);



        // name = "Artem";
        // let hello = `Hello, {$name}`;
        // console.log(hello);

        // function find(k, arr) {
        //     let ar = [];
        //     for (i in arr) {
        //         for (j in i) {
        //             if (i[j] === k) {
        //                 ar.push(arr[i]);
        //             }
        //         }
        //     }
        //     return ar;
        // }

        // console.log(find("k", t));

        // document


