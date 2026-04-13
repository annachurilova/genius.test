//перетворити масив об'єктів з іменами фруктів  в масив імен фруктів
const fruits = [
    { id: 0, name: "apple" },
    { id: 1, name: "tomato" },
    { id: 2, name: "cherry" },
    { id: 3, name: "orange" },
]
let result = fruits.map(item => item.name);
console.log(result)

//Парні числа від 2 до 10 цікл for
const max = 10;
for (let i = 2; i <= max; i += 2) {
    console.log(i);
}

//замінити цікл for на while
for (let i = 0; i < 5; i++){
    console.log(`number${i}!`);
} 
let i = 0;
while (i < 5) {
    i++
    console.log(`number${i}!`);
}

//напишіть цікл,який пропонує prompt вивусти число більше за 100,якщо відвідувач введе менше,попросити ввести ще раз і так далі.Цікл має 
//завершитися ,коли введуть число більше або пустий рядок
let username = prompt(" Please enter your number");
while (username <= 100 && username) {
    username = prompt("Please enter another number");
    console.log(username);
}

//вирахуйте середній вік в масиві об'єктів з віком
const girls = [
    { name: "Оля", age: 23 },
    { name: "Аня", age: 29 },
    { name: "Юля", age: 10 },
    { name: "Катя", age: 20 },
]
let sum = girls.reduce((total, girl) => total + girl.age, 0);
console.log(sum);