//урок 4
//функції
function showMessege(name, city) {//оголошення функції
    console.log("Hello,my name is " + name + " I am from " + city);//тіло функції
}
showMessege("Nata", "Kyiv");//виклик функції
showMessege("Olya", "Lviv");
showMessege("Anna", "Kharkiv");

const userName = "Anna";//глобальні змінні,які існують в усьому коді
const seyHi = function () {
    let message = "Hello, my name is Anna";//локальні змінні,які існують тількі в тілі функції
    console.log(message)
    console.log("Hi");
    console.log(userName);
    console.log(message + userName);
}
seyHi()

//повернення значень функції
function sum(a, b) {
    return a + b;//повертає результат додавання а і б. Або можно записати так:let c= a+b; return c;
}
let result = sum(5, 7);
console.log(result);

//colback
//стрілочні функції
const testFunk = function (a, b) {
    console.log("a : " ,a);
    console.log("b : ", b);
    //c = a + b;
    return a+b;
}
testFunk(5, 7);

//порядок виконня коду

const a = function () {
    c();
    console.log("function a");
    b();
};
const b = function () {
    console.log("function b");
};
const c = function () {
    console.log("function c");
};
a();

//аргументи і rest
//const addName = function () {
    //const arg = Array.from(arguments);//перетворили на масив
   // console.log(arguments);
    //console.log(arg);
//}
//addName(1, 3, 5,);//псевдо масив
//addName(1, 3, 5, 68, 41);
 const addName = function (...arg) {//оператор rest,перетворення на звичайний масив
    console.log(arg);
};
addName(1, 3, 5,);
addName(1, 3, 5, 58, 74);


//функція зворотнього виклику
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }

}
function showOk() {
    console.log("You say Ok")
}
function showCansel() {
    console.log("You say no");
}
ask("You or N0", showOk, showCansel);

function checkAge(age) {
    if (age > 18) {
        return console.log("Hello");//повертає 
    }
    return console.log("Good bye");
}
checkAge(2);
//може не повертати return
//function showMovie(age) {
   // if (age < 21) {
    //    return;
   // }
    //return console.log("Go to movie!");
//}
//showMovie(22)

//стрілкові функції
const test = (arg) => {
    console.log(arg);
};//синтаксис стрілкових функцій
test("Hello");//у стрілкових функціях немає псевдо масивів
const showMovie = (age) => {
    if (age > 21) {
        return console.log("Hello I");
    }
    return console.log("Bye")
}
showMovie(22);

//контексти і виклики
const d = () => {
    console.log("d");
};
const e = () => {
    console.log("e");
};
const f = () => {
    console.log("f");
    d();
    e();
};
f();

console.log(document);
const numberRef = document.querySelector(`input[name="number"]`);
const buttonRef = document.querySelector("button");
console.log(numberRef.value);
console.log(buttonRef);
buttonRef.addEventListener(`click`, () => {
    console.log("click");
    console.log(numberRef.value);
});
const addNumber = (number) => {
    let sum = Number(number) + 10;
    return console.log(sum);
};
buttonRef.addEventListener(`click`, () => addNumber(numberRef.value));
