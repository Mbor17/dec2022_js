// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area(a,b) {
//     return (a+b)*2;
// }
// console.log(area(2,4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle(r) {
//  return (Math.PI*r*r);
// }
// console.log(circle(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder(r,h) {
//     return (2*Math.PI*r*(h+r));
// }
// console.log(cylinder(3,4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr=[1,2,3,4];
// function and() {
//     for (const array of arr) {
//     }
// }
// console.log(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function foo(text) {
//     console.log(arguments);
//     return arguments=`<p>${text} </p>`;
// }
// console.log(foo('hello'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function foo(text) {
//     let asd=`<ul> <li>${text}</li> </ul>`;
//     for (let i = 0; i < 3; i++) {
//         console.log(arguments);
//     }
// }
// foo('hello');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array=[11,22,'hello',true];
// function foo(arr) {
//        for (const item of arr) {
//      console.log(`<ul> <li>${item}</li> </ul>`);
//     }
// }
// foo(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let names=[
//     {id:23, name:'olya', age:32},
//     {id:22, name:'ivan', age:22},
//     {id:35, name:'anna', age:25},
//     {id:37, name:'kolya', age:23}
// ]
// function arr(array){
//     for (const element of array) {
//        console.log(element);
//     }
//
// }
// arr(names);

// - створити функцію яка повертає найменьше число з масиву


// let array=[33,45,32,56,12,27,234];
// function foo(arr) {
//     return (Math.min(...arr))
// }
//
// console.log(foo(array));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let array=[33,45,32,56,12,27,234];
// function sum(arr) {
//       let busket=0;
//        for (const num of arr) {
//          busket=busket+num;
//        }
//     return busket;
// }
// console.log(sum(array));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let array=[11,22,33,44];
// function swap(arr,index1,index2) {
//     if (index1 = arr[0]){
//         console.log(arr[1])
//     }else (index2=arr[1])
//     console.log(arr[0]);
//
// }
// swap(array);

// function swap(arr,index1,index2) {
//     let v1=arr[index1];
//     let v2=arr[index2];
//     arr[index1]=v2;
//     arr[index2]=v1;
//     return arr;
// }
// console.log(swap([11,22,33,44],0,1));



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let exchange=(10000,
//     [
//         {currency:'USD',value:40},
//         {currency:'EUR',value:42}
//     ],
//     'USD');
// function exch(sumUAH,currencyValues){
//       return sumUAH/currencyValues;
// }
// let x=exch(10000,40);
// let y=exch(10000,42);
// console.log(x);
// console.log(y);


// function exchange(UAH,currencys,exitCurrency) {
//     for (const item of currencys) {
//         if (item.currency === exitCurrency) {
//             return UAH / item.value;
//         }
//     }
// }
// console.log (exchange(
//     10000,
//     [
//         {currency:'USD',value:40},
//         {currency:'EUR',value:42}
//     ],
//     'USD'));