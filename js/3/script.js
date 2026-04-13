//Урок 3

//області видимості
const a = 5;
console.log(a);
//console.log(a);
//const a = 5;

if (true) {
    console.log("Block", a);
}
console.log("Global", a);
if (true) {
    const b = 10;
    console.log("Block", b);
}
//console.log("Global", b);

//цикл
//while
let i = 0;
while (i < 5) {
    i++;
    console.log("i", i);
}
i = 3;
while (i) {
    i--;
    console.log("i", i);
}
while (i) console.log("i", i--);

//do while
i = 0
do {
    console.log("i", i);
    i++;
} while (i < 5);

//for
for (let i = 0; i < 3; i++){
    console.log("i", i);
}
for (; i < 3;){
    i++;
    console.log("i", i);
}

//break,contine
let summ = 0;
while (true) {
    let value = +prompt("Введіть число");
    if (!value) break;
    summ += value;
}
console.log("Сума", summ);

for (let i = 0; i < 10; i++){
    if (i % 2 === 0) continue;
    console.log("i", i);
}

//масиви
let arr = [1, 2, 3];
console.log(arr[0]);
arr[0] = 10;
console.log(arr[0]);
arr=["apple", "orange", "banana"];
console.log(arr[3]);
arr[2] = "grase";
console.log(arr[2]);
console.log(arr);
console.log(arr.length);
arr2 = [1, "apple", { key: "" }];
console.log(arr2);
arr.push("cheery");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("tomato");
console.log(arr);

//метод перебору масиву
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
for (let item of arr) {
    console.log(item);
}
//доступ до індексу
for (let key in arr) {
    console.log(key);
    console.log(arr[key]);//не рекомендується використовувати для масивів
}

//масиви в масивах
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(matrix);
console.log(matrix[1]);
console.log(matrix[1][1]);

//методи присвоєння
let c = 5;
let b = c;
console.log(c);
console.log(b);
c = 10;
console.log(c);
console.log(b);

//об'єкти копіюються за значенням
let arr1 = [1, 2, 3];
let arr3 = arr1;
arr1.push(4);
console.log(arr1);
console.log(arr3);

//методи масиву
let arr4 = ["a", "b", "c", "d","e"];
delete arr4[2];//видаляє елемент ,але не змінює індекси
console.log(arr4);//так видаляти не можно
arr4.splice(2, 1);//видаляємо аргумент і змінюємо індекси
console.log(arr4);
arr4.splice(2, 2);
console.log(arr4);
console.log(arr4.slice(1, 3));//створює новий масив з аргументів,але не змінює індекси


//об'єднання масивів
let d = [1, 2, 3];
console.log(arr.concat(d));
console.log(arr.concat(d, "test"));

//пошук елементів
console.log(arr4);
console.log(arr4.indexOf("b"));//показує індекс елемента,якщо його немає -1
console.log(arr.indexOf("apple"));
console.log(arr.lastIndexOf("1"));//шукає з кінця масиву
console.log(arr.includes("c"));//true,якщо елемент є в масиві,інакше false
const fruts = [{
    id: 0, name: "apple"
},
{
    id: 1, name: "tomato"
},
{
    id: 2, name: "cherry"
},
{
    id: 4, name: "orange"
},
]
console.log(fruts.find(item => item.id === 2));//шукає елемент за умовою і повертає його,якщо його немає-underfined
console.log(fruts.find(item => item.name === "tomato"));//
console.log(fruts.filter((item) => item.id < 2));//

//map
let result = fruts.map(item => item.name);
console.log(result);

//split
let names = "Anna,Olga,Irina,Petr";
let arr5 = names.split(", ");
console.log(arr5);

//join
let newString = arr5.join(", ");
console.log(newString);

//обчислити суму всього масиву
arr = [1, 2, 3, 4, 5];
let red = arr.reduce((summ, item) => summ + item, 0);
console.log(red);

arr = [23, 45, 68];
let sum = arr.reduce((summ, item) => summ + item, 0)/arr.length;
console.log(sum);
