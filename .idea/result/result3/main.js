// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     ];

//
// for ( let user of users){
//     document.write(`
//         <div>
//             <h2>${user.name} ${user.age} </h2>
//             <p>${user.status}</p>
//         </div>
//     `)
//
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     ];

//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     document.write(`
//        <div>
//            <h2>${user.name} ${user.age} </h2>
//              <p>${user.status}</p>
//         </div>
//      `)
//
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let locations = [
//     {
//         "title": "м. Київ",
//         "type": "city"
//     },
//     {
//         "title": "Житомирська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Харківська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Вінницька область",
//         "type": "oblast"
//     },
//     {
//         "title": "Чернігівська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Дніпропетровська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Черкаська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Волинська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Київська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Миколаївська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Рівненська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Сумська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Тернопільська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Краматорський район",
//         "type": "raion"
//     },
//     {
//         "title": "Кіровоградська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Хмельницька область",
//         "type": "oblast"
//     },
//     {
//         "title": "Запорізька область",
//         "type": "oblast"
//     },
//     {
//         "title": "Одеська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Полтавська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Львівська область",
//         "type": "oblast"
//     }
//     ]

// let i=0;
// while (i<locations.length){
//     document.write(`<div>`);
//     document.write(`<h2> ${locations[i].title}</h2>`);
//     document.write(`</div>`)
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//

// let locations = [
//     {
//         "title": "м. Київ",
//         "type": "city"
//     },
//     {
//         "title": "Житомирська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Харківська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Вінницька область",
//         "type": "oblast"
//     },
//     {
//         "title": "Чернігівська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Дніпропетровська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Черкаська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Волинська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Київська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Миколаївська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Рівненська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Сумська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Тернопільська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Краматорський район",
//         "type": "raion"
//     },
//     {
//         "title": "Кіровоградська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Хмельницька область",
//         "type": "oblast"
//     },
//     {
//         "title": "Запорізька область",
//         "type": "oblast"
//     },
//     {
//         "title": "Одеська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Полтавська область",
//         "type": "oblast"
//     },
//     {
//         "title": "Львівська область",
//         "type": "oblast"
//     }
// ]

//
// let i=0;
// do {
//     document.write(`<div>`);
//     document.write(`<h2> ${locations[i].title}</h2>`);
//     document.write(`</div>`);
//     i++;
// } while (i<locations.length)


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// for (const listOfItem of listOfItems) {
//     document.write(`<div>
//               <ul>
//                  <li>${listOfItem}</li>
//               </ul>
//                   </div>
// `)
// }

//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//


//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];

// for (let product of products) {
//     document.write(`<div class="product-card">
// <h3 class="product-title">${product.title} ${product.price}</h3>
// <img src="${product.image}" alt=""class="product-image">
//
// </div>`)
//
// }
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------

//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// for (let user of users) {
//     if (user["status"]===true){
//         console.log(user["status"]=true)
//     }else {
//         console.log(user["status"]=false)
//     }
//
// if (user["age"]>30){
//     console.log(user["age"])
// }else {
//     console.log(user["age"]="")
// }
// }

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
