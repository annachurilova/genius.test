//змінні
//console.log(a);
//let a=10;
//console.log(a);//10
//a=20;
//console.log(a);//20
//console.log(b);
//const b = 15;
//console.log(b);//15
//console.log(1 + 2)
//const value ="3";
//console.log(typeof value);перевіряємо тіп даних
//console.log(Number(value)); перетворюємо на цифру
//перевіряємо на чісло
//let a = 31;
//console.log(a);
//const number = Number("51");//51
//console.log(Number.isNaN(number)); false
//const string = Number("qweqwe");//nan
//console.log(Number.isNaN(string));//true
console.log(Number.parseInt("5dd")); //5
console.log(Number.parseInt("12fhh6.6")); //12
console.log(Number.parseInt("11.6hfj28")); //11
console.log(Number.parseInt("jnfh")); //NaN
console.log(Number.parseFloat("5ddd"));//5
console.log(Number.parseFloat("12fhf66"));//12
console.log(Number.parseFloat("11.6hfj28"));//11.6
console.log(Number.parseFloat("jnfh"));//NaN
//складання з крапкою
console.log(0.1 + 0.2 === 0.3);//false
console.log(0.1 + 0.2);//0.30000000000000004
console.log((0.1 * 10 + 0.2 * 10) / 10);//0.3
//повертання найбільшого числа і найменшого до цілого вказанного числа
console.log(Math.floor(1.7));//1
console.log(Math.ceil(1.2));//2
//округлення до найбільшого цілого
console.log(Math.round(1.2));//1
console.log(Math.round(1.5));//2
//повертати найбільше числот з переліченних
console.log(Math.max(10, 20, 50, 40));//50
//повертати найменше число з переліченних
console.log(Math.min(20, 10, 60, 100));//10
//повертає в ступінь
console.log(Math.pow(2, 3));//8
//повертає випадкове число від 0 до 1
console.log(Math.random());//випадкове чісло від 0 до 1
console.log(Math.random() * (10 - 1) + 1);//випадкове число від 0 до 10
//STRING
let str = "Привіт";
let str2 = "Одинарні лапки також дозволяються";
let phrase = `Речення. так можно вставляти ${str}`;
let name = `Ганна`;
let hello = `Прівіт ${name}`;
console.log(hello);

//якщо змінні не міняються,то можно додавати їх в строчку
const message = "JavaScript" + " " + "is" + "awesome";
console.log(message); //JavaScript is awesome

//конкатенація
let result;
result = 5 + "5";
console.log(result);//"55"
console.log(typeof result);//string

result = 5 + "5" + 5;
console.log(result);//"555"
console.log(typeof result);//string

result = 5 + 5 + "5";
console.log(result);//105
console.log(typeof result);//string

//методи строк

const js = "JavaScript";

//length -довжіна строки
//toLowerCase() -все в ніжній регістр
console.log(message.toLowerCase());//javascript is awesome

//toUpperCase() -все в верхній регістр
console.log(message.toUpperCase());//JAVASCRIPT IS AWESOME

//indexOf() повертає індекс першого входження підстроки в рядок,або -1,якщо підстрока не знайдена
console.log(message.indexOf("t"));//8
console.log(message.indexOf("hello"));//-1

//incLudes() повертає true, якщо рядок містить певну підстроку,і false в іншому випадку
const message2 = "Welcome to Bahamas!";
console.log(message2.length);//19
console.log("There is notthing impossible to him who will try".length);//47
console.log(message2.includes("Welcome"));//true
console.log(message2.includes("welcome"));//false

//BigInt
const num = 9007199254740991n;
console.log(typeof num);//bigint

//об'єкти
let obj = {
    city: "Kyiv",//за ключом city зберігається значення Kyiv
    age: 450,//за ключом age зберігається значення 450
    country: "Ukraine"//за ключом country зберігається значення Ukraine
};
console.log(obj);//{city: `Kyiv`, age:450, country: `Ukraine`}

let user = {
    name: "Ganna",
    age: 49,
    work: "Mam",
}
console.log(user);//{name:`Ganna`, age:49, work:``Mam`}
//можно дивитися кожне значення окремо
console.log(user.name);

//методи
//delete -видалити властивість з об'єкта
delete user.name;
console.log(user);//{age:49, work:`Mam`}
let user2 = {
    name: "Ganna",
    age: 49,
    "like books":true,//ім'я власності з пробілом має буті в лапках 
}
console.log(user2);//{name:`Ganna`, age:49, "like books":true}
//прісвоєння значення власності
let user3 = {};
user3.name = "Anna";
console.log(user3);//{name: `Anna`}
user3.age = 35;
console.log(user3);//{name: `Anna`, age:35}


//for (key in object)- цикл для перебора всіх властивостей об'єкта
let user4 = {
    name: "Ganna",
    age: 49,
    work: "Mam",
    isAdmin: true,
}
for (let key in user) {
    //ключи
    console.log(key);//name, age, work, isAdmin
    //значення ключів
    console.log(user[key]);//Ganna, 49, Mam, true
}
//впорядковування властивостей об'єктів
let codes = {
    49: "Germany",
    41: "Switzerland",
    44: "Great Britain",
    1: "USA",
}
for (let code in codes) {
    console.log(code);//1, 41, 44, 49
}
//не цілочисельні властивості об'єкта упорядковуються в порядку створення
for (let prop in user) {
    console.log(prop);//name, age, work, isAdmin
}