// sum = parseFloat(prompt("Сумма вклада: "))
// proc = parseFloat(prompt("Процентная ставка: "))
// alert("Сумма после вклада: " + "\n" + (sum + sum * proc) / 10)

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// };

// let j = 0;
// while (j < 10) {
//     console.log(j)
//     j++;
// };
// let a = [1, 2];
// function display (s1, s2){
//     console.log(s1, s2)
// }
// display(...a)


/*let hello = "Ваш компьютер был взломал. \nНажмите \"Ок\" для подтверждения";
        alert(hello);
        let person = {
            name: "Artem",
            age: 18
        };
        console.log(typeof person.age, typeof person.name);
        console.log(parseInt("5"))
        console.log(isNaN(5))
        colsole.log(parseInt("5", 2))
        a = prompt()
        colsole.log
        */
// let i = 0;
// while (i <= 100) {
//     if (!(i % 2)) {
//         console.log(i);
//     };
//     i++;
// };
// let a = [1, 2];
// function display(s1, s2) {
//     console.log(s1, s2)
// }
// display(...a)
// function sqrt(num) {
//     if (typeof num == "number") {
//         return num * num;
//     } else {
//         return parseFloat(num) * parseFloat(num);
//     };
// };

// function map(arr, func) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr2.push(func(arr[i]))
//     }
//     return arr2;
// }
// // console.log(map([1, 2, 3], sqrt));

// function isOdd(num) {
//     if (num % 2 == 0) {
//         return true;
//     };
// };

// function filter(arr, func) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i]) == true) {
//             arr2.push(arr[i]);
//         };
//     };
//     return arr2;
// }

// console.log(filter([1, 2, 3, 4, 5, 6, 7], isOdd));

/*let hello = "Ваш компьютер был взломал. \nНажмите \"Ок\" для подтверждения";
        alert(hello);
        let person = {
            name: "Artem",
            age: 18
        };
        console.log(typeof person.age, typeof person.name);
        console.log(parseInt("5"))
        console.log(isNaN(5))
        colsole.log(parseInt("5", 2))
        a = prompt()
        colsole.log
        */
// let i = 0;
// while (i <= 100) {
//     if (!(i % 2)) {
//         console.log(i);
//     };
//     i++;
// };
// let a = [1, 2];
// function display(s1, s2) {
//     console.log(s1, s2)
// }
// display(...a)
// function sqrt(num) {
//     if (typeof num == "number") {
//         return num * num;
//     } else {
//         return parseFloat(num) * parseFloat(num);
//     };
// };

// function map(arr, func) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr2.push(func(arr[i]))
//     }
//     return arr2;
// }
// // console.log(map([1, 2, 3], sqrt));

// function isOdd(num) {
//     if (num % 2 == 0) {
//         return true;
//     };
// };

// function filter(arr, func) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i]) == true) {
//             arr2.push(arr[i]);
//         };
//     };
//     return arr2;
// }

// // console.log(filter([1, 2, 3, 4], isOdd));



// function menu(m, a, b) {
//     switch (m) {
//         case 1:
//             return function (a, b) {
//                 return a + b;
//             };
//         case 2:
//             return function (a, b) {
//                 return a - b;
//             }
//     };
// };

// // console.log(menu(1)(2, 3))

// // function fun1() {
// //     let a = 1;
// //     return {
// //         inc: function () {
// //             a++;
// //         },
// //         dec: function () {
// //             a--;
// //         },
// //         print: function () {
// //             console.log(a)
// //         }
// //     };
// // }

// // let f = fun1();
// // f.dec();
// // f.print();


let f = (function () {
    let a = 5;
    return {
        inc: function () {
            a++;
        },
        dec: function () {
            a--;
        },
        print: function () {
            console.log(a);
        }
    };
})();

f.print()

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(5));

let foo = 9;

function sum(x) {
    x++;
}

sum(foo);
console.log(foo)

let a = {
    name: "Artem"
}

function changeName(obj, n) {
    obj.name = n;
}

changeName(a, "Test123");
console.log(a);

let b, c;

b = 1;
c = 2;

(b, c) => { console.log(b, c) }

function fun(a, b) {
    if (a > b) {
        return -1;
    } else if (a = b) {
        return 0;
    } else {
        return 1;
    }
}

function usort(arr, func) {
    for (let k = arr.length - 1; k > 0; k--) {
        for (let i = 0; i < k; i++) {
            if (func(arr[i], arr[i + 1])) {
                let temp = arr[i]
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

// console.log(usort([1, 3, 4, -1, 2], fun));

function Programmer(languages) {
    this.languages = languages;
    this.isKnowLanguage = function (lang) {
        if (this.languages.includes(lang)) {
            return true;
        }
        return false;
    }
}

// i = new Programmer(["C#", "JavaScript"]);
// i.languages.push("PHP");
// console.log(i.isKnowLanguage("PHP"));

let arr = new Array();

Array.prototype.pop = function () {
    console.log(this.Array)
}

// let arr = [1, 2, 3];

// Array.prototype.display = function () {
//     console.log(this)
// }

// arr.display()

// function a(n) {
//     console.log(n);
// }

// console.log(typeof a);

// function a() {
//     this.name = "name";
// }

// [].display.call([1, 2, 3])

// function DisplayArray(arr) {
//     this.arr = new Array;
//     this.display = function (arr) {
//         console.log(arr);
//     }
// }

// function User(arr) {
//     DisplayArray.call(this, arr);
// }

// function DisplayArray() {
//     this.display = function () {
//         console.log(this)
//     }
//     Array.call(this);
// }

// DisplayArray.prototype.push = Array.prototype.push;

// let t = new DisplayArray();
// t.push("Test123");
// t.display();

// function display() {
//     console.log(this);
// }
// let l = {
//     name: "test123",
// }
// console.log(l)
// f = display.bind(l);
// display();
// f();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this)
    }
}

let p = new Person;
