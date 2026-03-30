//УРОК 2

//вивід данних
const message1 = "JavaScript is awesome!";
console.log(message1);//JavaScript is awesome!
alert(message1);//JavaScript is awesome!

//Отримання данних
const isConfirm = confirm("Please confirm reservation");
console.log(isConfirm);//true або false
const test = confirm("Yes або No");
console.log(test);//true or false

//prompt - виводіть вікно з полем для введення даних і кнопки "ок" і "відміна"
const username = prompt(" Please enter your name");
console.log(username);//виводить те, що користувач ввів або null, якщо він натиснув "відміна"
const number = prompt("Please enter a number");
console.log(number);//виводить те, що користувач ввів або null, якщо він натиснув "відміна"

//перетворення типу
const value = prompt("Please enter a number");
console.log(typeof value);//string
console.log(value);//виводіть те,що ввів корістувач

//string
//value = false;
console.log(typeof value);//boolean
const newValue = String(value);
console.log(value);//false
console.log(typeof newValue);//string

//number
let value2;
value2 = "123";
console.log(typeof value2);//string
const newValue2 = Number(value2);
console.log(newValue2);//123
console.log(typeof newValue2);//number
const test2 = Number("qwerty");
console.log(test2);//NaN

//boolean
//значення ,які інтуітивно порожні або 0,порожній рядок,null,undegined,NaN,будуть перетворені в false
//всі інші  значення будуть перетворенні в true
console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean("Hello"));//true
console.log(Boolean(""));//false
console.log(Boolean(null));//false

//оператори
//наприклад, у множенні 5*2, є два операнди(іноді їх називають аргументами) 5 і 2, і оператор *, який виконує множення
//оператор є унарним,якщо аін має один операнд,наприклад :
let x = 1;
x = -x;
console.log(x);//
//оператор є бінарним якщо він має два операнда наприклад:
let a = 1, b = 3;
console.log(a + b);//4

//математичні операції
//додавання
console.log(1 + 2);//3
//віднімання
console.log(5 - 3);//2
//множення
console.log(4 * 2);//8
//ділення
console.log(10 / 2);//5
//остача від ділення
console.log(10 % 3);//1
//піднесення до степеня
console.log(2 ** 3);//8
//порівняння
console.log(5 > 3);//true
console.log(5 < 3);//false
console.log(5 >= 3);//true
console.log(5 <= 3);//false
console.log(5 == 5);//true
console.log(5 == "5");//true, тому що оператор порівнює значення,а не типи
console.log(5 != 5);//false,не дорівнює
console.log(5 === 5);//true
console.log(5 !== "5");//false,не дорівнює
//or -and -not оператори порівняння
//and -(&&)
console.log(5 === 5 && 6 > 3);//true
console.log(5 === 6 && 6 > 3);//false
console.log(5 === 5 && 6 < 3);//false
//or - (||)
console.log(5 + 5 === 10 || 5 * 5 === 15);//true
console.log(5 + 5 === 11 || 5 * 5 === 25);//true
console.log(5 + 5 === 11 || 5 * 5 === 15);//false
//not - (!)
console.log(true);//true
console.log(!true);//false

//умови if -else
//одинарні
if (5 + 5 === 10)//умова// 
{
    console.log("Hello");//Hello
}//дія,яка виконується,якщо умова істина
if (5 + 5 === 11) {
    console.log("Hello"); 
} else {
    console.log("2");
}//дія,якщо умова не істина

//тернарний оператор
2 + 2 === 4 ? console.log("true") : console.log("false");//true
2 + 2 === 5 ? console.log("true") : console.log("false");//false

if (5 + 5 === 10) {
    console.log("true");
} else if (2 + 2 === 4) {
    console.log("true1");
} else {
    console.log("false");
}
if (5 + 5 === 11) {
    console.log("true");
} else if (2 + 2 === 4) {
    console.log("true1");
} else {
    console.log("false");
}

let leng = "ua";
if (leng === "ua") {
    console.log("понеділок")
} else if (leng === "en") {
    console.log("Monday")
} else {
    console.log("Reset")
}

//switch/case - це ще один спосіб використання умовних операторів,коли порівннянь багато
let num = 9;
switch (num) {
    case 0:
        console.log("0");
        break;
    case 5:
        console.log("5");
        break;
    case 10:
        console.log("10");
        break;
}
let cost;
const sub = "premium";
switch (sub) {
    case "free":
        cost = 0;
        break;
    case "pro":
        cost = 100;
        break;
    case"premium":
        cost = 500;
        break;
    default:
        console.log("invalid sub");
}
console.log(cost);//500

//вирішення логічних задач та побудова алгоритмів
const min = prompt("введіть хвилину");
if (min >= 0 && min <=14) {
    console.log("перша чверть")
}else if (min >= 15 && min <= 29) {
    console.log("друга чверть")
} else if (min >= 30 && min <=44 ) {
    console.log("третя чверть")
} else if (min >= 45 && min <= 59) {
    console.log("четверта чверть")
}

const value3 = prompt("введіть назву товару").toLowerCase();
switch (value3) {
    case "яблуко":
        cost = 10;
        alert(`вартість товару ${value3} становить ${cost}гривень`);
        break;
    case "груша":
        cost = 15;
        alert(`вартість товару ${value3} становить ${cost}гривень`);
        break;
    case "мандарин":
        cost = 30;
        alert(`вартість товару ${value3} становить ${cost}гривень`);
        break;
    case "диня":
        cost = 150;
        alert(`вартість товару ${value3} становить ${cost}гривень`)
        break;
    default : alert(`товару ${value3} немає в наявності`);
}