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
function sqrt(num) {
    if (typeof num == "number") {
        return num * num;
    } else {
        return parseFloat(num) * parseFloat(num);
    };
};

function map(arr, func) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(func(arr[i]))
    }
    return arr2;
}
// console.log(map([1, 2, 3], sqrt));

function isOdd(num) {
    if (num % 2 == 0) {
        return true;
    };
};

function filter(arr, func) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) == true) {
            arr2.push(arr[i]);
        };
    };
    return arr2;
}

// console.log(filter([1, 2, 3, 4, 5, 6, 7], isOdd));