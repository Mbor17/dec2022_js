// // Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// //     Вивести кожну змінну за допомогою: console.log
let hello = 'hello';
console.log(hello);

let str = 'hello';
console.log(str);

let owu = 'owu';
console.log(owu);

let ss = 'com';
console.log(ss);

let ua = 'ua';
console.log(ua);

let num = 1;
console.log(num);

let num1 = 10;
console.log(num1);

let num2 = -999;
console.log(num2);

let num3 = 123;
console.log(num3);

const PI = 3.14;
console.log(PI);

const e = 2.7;
console.log(e);

let num4 = 16;
console.log(num4);

let bool = true;
console.log(bool);

let bool1 = false;
console.log(bool1);
// // Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
let firstName = 'Mary';
let middleName = 'Ivanivna';
let lastName = 'Borovets';
let res = `${firstName} ${middleName} ${lastName}`;//інтерполяція;
console.log(res);

let res1=firstName +' '+ middleName +' '+ lastName;
console.log(res1);//конкатенація;
// // За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     // let a = 100; let b = '100'; let c = true;
let a=100;
console.log(typeof a);
let b='100';
console.log(typeof b);
let c=true;
console.log(typeof c);
//
// // За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName1=prompt('enter firstName1');
let middleName2=prompt('enter middleName2');
let age=prompt('enter age');
let res2=`${firstName1} ${middleName2} ${age}`;
console.log(res2);