//якщо змінна більше 0,то вона буде перетворенна на true,інакше на false
//1, 0, -3
let someNum = 1;
if (someNum > 0) {
    someNum = true;
} else { 
    someNum = false;
}
console.log('someNum: ' + someNum);

someNum = 0;
if (someNum > 0) {
    someNum = true;
} else { 
    someNum = false;
}
console.log('someNum: ' + someNum);

someNum = -3;
if (someNum > 0) {
    someNum = true;
} else { 
    someNum = false;
}
console.log('someNum: ' + someNum);

//якщо змінна ="test", виведіть true
//варіанти 'test', 'qwerty', true
console.log(Boolean('test'));//true
console.log(Boolean('qwerty'));//true
console.log(Boolean(true));//true

//якщо змінна більше 10 - відніміть 5,інакше додайте 5
//варіанти 1, 10, 13
let num = 1;
if (num > 10) {
    console.log(num -= 5);
} else {
    console.log(num += 5);
}

num = 10;
if (num >= 10) {
    console.log(num -= 5);
} else {
    console.log(num += 5);
}

num = 13;
if (num > 10){
    console.log(num -= 5);
} else {
    console.log(num += 5);
}

//зробіть сервіс, який отримує число від 1 до 12,і виведіть назву місяця,який відповідає цьому числу
const monthNumber = prompt("Введіть чісло від 1 до 12");
if (monthNumber == 1) {
    console.log("Січень")
} else if (monthNumber == 2) {
    console.log("Лютий")
} else if (monthNumber == 3) {
    console.log("Березень")
} else if (monthNumber == 4) {
    console.log("Квітень")
} else if (monthNumber == 5) {
    console.log("Травень")
} else if (monthNumber == 6) {
    console.log("Червень")
} else if (monthNumber == 7) {
    console.log("Липень")
} else if (monthNumber == 8) {
    console.log("Серпень")
} else if (monthNumber == 9) {
    console.log("Вересень")
} else if (monthNumber == 10) {
    console.log("Жовтень")
} else if (monthNumber == 11) {
    console.log("Листопад")
} else if (monthNumber == 12) {
    console.log("Грудень")
}

const value = prompt("Ввудіть число від 1 до 12");
switch (value) {
    case"1":
        console.log("Січень");
        break;
    case"2":
        console.log("Лютий");
        break;
    case"3":
        console.log("Березень");
        break;
    case"4":
        console.log("Квітень");
        break;
    case"5":
        console.log("Травень");
        break;
    case"6":
        console.log("Червень");
        break;
    case"7":
        console.log("Липень");
        break;
    case"8":
        console.log("Серпень");
        break;
    case"9":
        console.log("Вересень");
        break;
    case"10":
        console.log("Жовтень");
        break;
    case"11":
        console.log("Листопад");
        break;
    case"12":
        console.log("Грудень");
        break;
    default:
        console.log("Невірне число");
}

//зробить сервіс,який отримує трізначне чісло,і поверніть його суму користувачу
const threeDigitNumber = prompt("Введіть трізначне число");
const sum = threeDigitNumber.split("").reduce((acc, num) => acc + Number(num), 0);//123 = 1+2+3= 6
console.log("Сума цифр трізначного числа: " + sum);