// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str);
// console.log(str.length);
//
//
// console.log(s);
// console.log(s.length);
//
// let strn='javascript is cool';
// console.log(strn);
// console.log(strn.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.toUpperCase());
// let s='lorem ipsum';
// console.log(s.toUpperCase());
// let strn='javascript is cool';
// console.log(strn.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());
// let s='LOREM IPSUM';
// console.log(s.toLowerCase());
// let strn='JAVASCRIPT IS COOL';
// console.log(strn.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.replaceAll(' ',''));
// console.log(str.replaceAll('dirty', 'dirty '));
// or

// let str = ' dirty string   ';
// console.log(str.indexOf('d'));
// console.log(str.lastIndexOf('g'));
// console.log(str.substring(1, 13));

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));

//
// -  є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
// let arr=[10,8,-7,55,987,-1011,0,1050,0];
// let mapArr=arr.map((value, index)=>  {
//     return value=['index'];
// })
// console.log(mapArr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

// let nums = [11,21,3];
// let sort=nums.sort((u1,u2)=>{
// return u1-u2;
// })
// console.log(sort);


// let nums = [11,21,3];
// let sort=nums.sort((u1,u2)=>{
//     return u2-u1;
// })
// console.log(sort);


// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let sort=coursesAndDurationArray.sort((u1,u2)=>{
//     return u2.monthDuration-u1.monthDuration;
// });
// console.log(sort);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter=coursesAndDurationArray.filter(function (u){
//     return u.monthDuration>5;
// })
// console.log(filter);

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let map=coursesAndDurationArray.map((value, index) => {
//     return{
//         id:index+1,
//         title:value.title,
//         monthDuration:value.monthDuration
//     };
// })
// console.log(map);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

// let cards=[
//     {cardSuit:'spade',value:6,color:'black'},
//     {cardSuit:'spade',value:7,color:'black'},
//     {cardSuit:'spade',value:8,color:'black'},
//     {cardSuit:'spade',value:9,color:'black'},
//     {cardSuit:'spade',value:10,color:'black'},
//     {cardSuit:'spade',value:'ace',color:'black'},
//     {cardSuit:'spade',value:'jack',color:'black'},
//     {cardSuit:'spade',value:'queen',color:'black'},
//     {cardSuit:'spade',value:'king',color:'black'},
//     {cardSuit:'diamond',value:6,color:'red'},
//     {cardSuit:'diamond',value:7,color:'red'},
//     {cardSuit:'diamond',value:8,color:'red'},
//     {cardSuit:'diamond',value:9,color:'red'},
//     {cardSuit:'diamond',value:10,color:'red'},
//     {cardSuit:'diamond',value:'ace',color:'red'},
//     {cardSuit:'diamond',value:'jack',color:'red'},
//     {cardSuit:'diamond',value:'queen',color:'red'},
//     {cardSuit:'diamond',value:'king',color:'red'},
//     {cardSuit:'heart',value:6,color:'red'},
//     {cardSuit:'heart',value:7,color:'red'},
//     {cardSuit:'heart',value:8,color:'red'},
//     {cardSuit:'heart',value:9,color:'red'},
//     {cardSuit:'heart',value:10,color:'red'},
//     {cardSuit:'heart',value:'ace',color:'red'},
//     {cardSuit:'heart',value:'jack',color:'red'},
//     {cardSuit:'heart',value:'queen',color:'red'},
//     {cardSuit:'heart',value:'king',color:'red'},
//     {cardSuit:'clubs',value:6,color:'black'},
//     {cardSuit:'clubs',value:7,color:'black'},
//     {cardSuit:'clubs',value:8,color:'black'},
//     {cardSuit:'clubs',value:9,color:'black'},
//     {cardSuit:'clubs',value:10,color:'black'},
//     {cardSuit:'clubs',value:'ace',color:'black'},
//     {cardSuit:'clubs',value:'jack',color:'black'},
//     {cardSuit:'clubs',value:'queen',color:'black'},
//     {cardSuit:'clubs',value:'king',color:'black'},
// ];

// - знайти піковий туз

// let find=cards.find(card => {
//     return card.value==='ace'
// }
// )
// console.log(find);

// - всі шістки

// let filter=cards.filter(function (u){
// return u.value===6;
// }
// )
// console.log(filter);

// - всі червоні карти

// let filter=cards.filter(function (u){
// return u.color==='red';
// }
// )
// console.log(filter);

// - всі буби

// let filter=cards.filter(function (u){
// return u.cardSuit==='diamond';
// }
// )
// console.log(filter);


// - всі трефи від 9 та більше

// let filter=cards.filter(function (u){
// return u.cardSuit==='clubs'&&u.value!=6&&u.value!=7&&u.value!=8;
// })
// console.log(filter);

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

// let reduce=cards.reduce((accumulator, card) => {
//     if (card.cardSuit==='spade') {
//         accumulator.spades.push(card);
//     }   if(card.cardSuit==='clubs'){
//         accumulator. clubs.push(card);
//     }
//     if (card.cardSuit==='heart'){
//         accumulator.hearts.push(card);
//     } if (card.cardSuit==='diamond') {
//         accumulator.diamonds.push(card)
//     }
// return accumulator;
//     },
//
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// })
// console.log(reduce);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let a=coursesArray;
 coursesArray.forEach(function (value){

if(value.modules==='sass'){
    a.push(value)
}
})
console.log(a)



// coursesArray.forEach( value=>{
//     if (value.modules===['docker']){
//
//     }
//
// console.log(value);}
// )
//     if (value.modules==='docker'){
//
//     }
//     console.log(value);}
// )

// coursesArray.forEach(function (modules ) {
//          if (modules === 'sass') {
//             console.log(modules)
//         }
//     }
// )

// function forEachcoursesArray(arr,callback){
//     for (const item of arr) {
//         if (arr.modules === 'sass') {
//             callback(item)


// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker