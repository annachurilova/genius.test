//робота зі змінними
console.log("Home work 1");
let name = "Іван";
let city = "Київ";
city = name;
console.log(city);//Іван

name = "Ольга";
console.log(`привіт ${1}`);//привіт 1
console.log(`привіт ${"name"}`);//привіт "name"
console.log(`привіт ${name}`);//привіт 
console.log("привіт " + name);//привіт Ольга

let a = "5";
let b = "13cvb";
let c = "12.9cxfdgt";
console.log(a);//5
console.log(b);//13cvb
console.log(c);//12.9cxfdgt
//вивести тип данних 
console.log(typeof Number(a));//number
console.log(typeof parseInt(b));//number
console.log(typeof parseFloat(c));//number

//0.1 + 0.2 = 0.3
console.log((0.1 * 10 + 0.2 * 10) / 10);//0.3

//найбільше чісло з переліку 20 10 50 40
console.log(Math.max(20, 10, 50, 40));//50

//випадкове чісло від 2 до 4
console.log(Math.random() * (4 - 2) + 2);//

//дізнатись довжину месседжа
const message = "Welcome to Bahamas!";
console.log(message.length);//19

//Месседж великіми літерами
console.log(message.toUpperCase("Welcome to Bahamas!"));//WELCOME TO BAHAMAS!

let obj = {
    name: "Ganna",
    age: 49,
    city: "Kharkiv",
}
console.log(obj);//{name: "Ganna", age:49, city: "Kharkiv"}
//видалити місто
delete obj.city;
console.log(obj);//{name: "Ganna", age:49}
//додати буль (boolean) з ключем like flowers
obj.likeFlowers = true;
obj.city = "Kyiv";
console.log(obj);

//за допосмогою ціклу for...in вивести значення і ключі об'єктів
let user = {
    name: "Ganna",
    age: 49,
    work: "Mam",
    isAdmin: true,
}
for (let key in user) {
    //ключи
    console.log(key);//name, age, work, isAdmin
    //значення
    console.log(user[key]);//Ganna, 49, Mam, true
}
