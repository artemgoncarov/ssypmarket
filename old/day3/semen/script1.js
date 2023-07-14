// let person = new Object();
// person.name = "1";
// person.age = "2";
// person.hobby = "3";
// for (i in person){
//     console.log(i + ": " + person[i]);
// }
// function Programmer(name, languages){
//     this.name = name;
//     this.languages = languages;
//     this.is_know_lang = function(lang){
//         if (this.languages.includes(lang)){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     this.who_is_better = function(progr){
//         if (this.languages.length > progr.languages.length){
//             console.log(this.name + " is better than " + progr.name);
//         }
//         else if (this.languages.length == progr.languages.length){
//             console.log(this.name + " is simillar with " + progr.name);
//         }
//         else{
//             console.log(progr.name + " is better than " + this.name);
//         }
//     }
// }
// Artem = new Programmer("Артём", ["Scratch", "Python"]);
// Simon = new Programmer("Семён", ["Python", "C++", "JavaScript"]);
// console.log(Artem.is_know_lang("C#"));
// console.log(Simon.is_know_lang("PHP"));
// console.log(Simon.is_know_lang("JavaScript"));
// Simon.who_is_better(Artem);
// Array.prototype.display = function(){
//     console.log(...this);
// }
// let a = [1, 2, 3];
// a.display();
// let func2 = function(){
//     console.log("Hello World!");
// }
// console.log(typeof func2);
// let arr = new Array();
// arr.display.call([1, 2, 3]);
// function display_array(){
//     Array.call(this);
//     this.display = function(){
//         console.log(...this);
//     }
// }
// display_array.prototype = Array.prototype
// darr = new display_array();
// darr.push("Элемент");
// darr.display();
// let display1 = function(){
//     console.log(this);
// }
// display1();
// f = display1.bind(Array);
// f();
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    display_name(){
        console.log(this.name + ", " + this.age);
    }
    static test_func(){
        console.log("It works!")
    }
}
Simon = new Person("Семён", 14);
Simon.display_name();
class User extends Person{
    constructor(name, age, login){
        super(name, age);
        this.login = login
    }
    display_name(){
        console.log(`${this.login} (${this.name}), ${this.age}`)
    }
    display_info(){
        super.display_name()
        console.log("User")
    }
}
Susl = new User("Семён", 14, "S");
Susl.display_name();
Susl.display_info();
Person.test_func();
User.test_func();