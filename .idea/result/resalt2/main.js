// let x=' assdddffff'
// console.log(x)

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let home = [
//     'roma',
//     'vova',
//     'olya',
//     'mary',
//     'phone',
//     2023,
//     true,
//     0,
//     [
//         33,
//         [1, 2, 3],
//         55
//     ],
//     child={
//         age: 35,
//         name: 'iven'
//     }
// ];
// console.log(home);
// console.log(home[0]);
// console.log(home[1]);
// console.log(home[2]);
// console.log(home[3]);
// console.log(home[4]);
// console.log(home[5]);
// console.log(home[6]);
// console.log(home[7]);
// console.log(home[8][0]);
// console.log(home[8][1]);
// console.log(home[8][1][0]);
// console.log(home[8][1][1]);
// console.log(home[8][1][2]);
// console.log(home[9]['age']);
// console.log(home[9].name);


// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1={
//     title:'fox',
//     pageCount:234,
// genre:'novel'
// }
// let book2={
//     title:'dog',
//     pageCount:145,
// genre:'detective'
// }
// let book3={
//     title: 'cat',
//     pageCount:45,
// genre:'fantasy'
// }
// let BOOKS = [book1,book2,book3];
// console.log(BOOKS);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let auth1 = {
//     name: 'tom',
//     age: 45
// }
// let auth2 = {
//     name: 'jason',
//     age: 67
// }
// let auth3 = {
//     name: 'dikkens',
//     age: 76
// }
//
// let book1 = {
//     title: 'fox',
//     pageCount: 234,
//     genre: 'novel',
//     authors: [auth1, auth2, auth3]
// }
// let book2 = {
//     title: 'dog',
//     pageCount: 145,
//     genre: 'detective',
//     authors: [auth1, auth2, auth3]
// }
// let book3 = {
//     title: 'cat',
//     pageCount: 45,
//     genre: 'fantasy',
//     authors: [auth1, auth2, auth3]
// }
//
// let BOOKS1 = [book1, book2, book3];
// console.log(BOOKS1);


// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// let users=[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];

// let user1 = {
//     name: 'ivan',
//     username: 'dog',
//     password: '123'
// }
// let user2 = {
//     name: 'olya',
//     username: 'cat',
//     password: '456'
// }
// let user3 = {
//     name: 'anna',
//     username: 'book',
//     password: '789'
// }
// let user4 = {
//     name: 'vova',
//     username: 'platen',
//     password: '135'
// }
// let user5 = {
//     name: 'misha',
//     username: 'code',
//     password: '579'
// }
// let user6 = {
//     name: 'mary',
//     username: 'mar',
//     password: '011'
// }
// let user7 = {
//     name: 'tolya',
//     username: 'tol',
//     password: '012'
// }
// let user8 = {
//     name: 'dima',
//     username: 'dim',
//     password: '013'
// }
// let user9 = {
//     name: 'yura',
//     username: 'yuran',
//     password: '014'
// }
// let user10 = {
//     name: 'petro',
//     username: 'pet',
//     password: '015'
// }
// let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// console.log(users[0]['password'], users[1]['password'], users[2]['password'], users[3]['password'], users[4]['password'], users[5]['password'], users[6]['password'], users[7]['password'], users[8]['password'], users[9]['password']);
// console.log(users[0]['password']);
// console.log(user1.password, user2.password, user3.password, user4.password, user5.password, user6.password, user7.password, user8.password, user9.password, user10.password);
// console.log(users[0]. password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x=prompt(' ')
// if (x!=0) {
//     console.log(true);
// }else{
//     console.log(false);
// }
// let x=-3;
// if (x!=0) {
//     console.log(true);
// }else{
//     console.log(false);
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// let time=prompt('uif');
// if (time>=0 && time<=15){
//     console.log(1);
// }else if(time>15 && time<=30){
//         console.log(2);
// }else if(time>30 && time<=45){
//     console.log(3);
// } else {console.log(4)}

// let x=time/15;
// console.log(Math.ceil(x));

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day=prompt('uif');
// if (day>=1 && day<=10){
//     console.log(1);
// }else if(day>10 && day<=20){
//         console.log(2);
// }else if(day>20 && day<=31){
//     console.log(3);}

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let number=prompt('1');
// switch (number) {
//     case '1':
//         console.log('monday');
//         break;
//     case '2':
//         console.log('tuesday');
//         break;
//     case '3':
//         console.log('wednesday');
//         break;
//     case '4':
//         console.log('thursday');
//         break;
//     case '5':
//         console.log('friday');
//         break;
//     case '6':
//         console.log('saturday');
//         break;
//     case '7':
//         console.log('sunday');
//         break;
//     default:
//         console.log('???????');
// }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let x= Math.max(3,5);
// console.log(x);

// let x= Math.max(3,3);
// console.log(x);


// let x=prompt( '');
// let y=prompt('');
// if (x>=y){
//     console.log(x);
// }else if(x<=y){
//         console.log(y);
// }

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//

// let x='';
// if (x=x||'default'){
//     console.log(false);
// }else{
//     console.log(true)
// }

// з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0]['monthDuration']>5){
//     console.log('super');
// }else {
//     console.log('-')
// }
// if (coursesAndDurationArray[1]['monthDuration']>5){
//     console.log('super');
// }else {
//     console.log('-')
// }if (coursesAndDurationArray[2]['monthDuration']>5){
//     console.log('super');
// }else {
//     console.log('-')
// }if (coursesAndDurationArray[3]['monthDuration']>5){
//     console.log('super');
// }else {
//     console.log('-')
// }if (coursesAndDurationArray[4]['monthDuration']>5){
//     console.log('super');
// }else {
//     console.log('-')
// }if (coursesAndDurationArray[5]['monthDuration']>5){
//     console.log('super');
// }else {
//     console.log('-')
// }