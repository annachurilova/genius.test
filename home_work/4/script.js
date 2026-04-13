//Перепешить функцію використовуючі '?' або '||`
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm(`Батьки дозволили?`);
    }
}

function checkAge_1(age) {
    return age > 18
        ? console.log(true)
        : confirm(`Батьки дозволили 1?`);
}

function checkAge_2(age) {
    return age > 18 || confirm(`Батьки дозволили 2?`);
}
checkAge_2(21)
//checkAge(16)

//функція min(a,b), що повертає менше з двох чисел а та b
function min(a, b) {
    return a > b ? b : a;
}
console.log(min(2, 3));
console.log(min(5, 4));

//Перепишіть з використанням стрілкових функцій
//Замініть функціональні вирази в коді нижче на стрілкові функції
function ask_0(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

ask(
    "Ви згодні?",
    function() { alert("Ви погодились."); },
    function() { alert("Ви скасували виконання."); }
);


// function showOk() {
//     console.log("Ви погодились showOk")
// }
// function showCansel() {
//     console.log("Ви скасували виконання showCansel");
// }
const showOk = () => console.log("Погодились");
const showCansel = () => console.log("Cкасували");

ask("Ви згодні?", showOk, showCansel);
