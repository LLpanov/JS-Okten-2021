// 1.  - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// document.body.onclick = function (e){
//     console.log(e.target.localName,e.target.id,e.target.classList.value,e.target.offsetWidth,e.target.offsetHeight)
//  // console.log(e)
// }

// 2.- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// //     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// //     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в
// //     форматі висота*ширина

// document.body.onclick = function (e) {
//     let pop = document.createElement('div');
//     pop.classList.toggle('popup')
//     let message = document.createElement('p');
//     message.innerText = `TegName your element : (${e.target.localName}) - Your ID : (${e.target.id} )- Your class (${e.target.classList.value}) - W: ${e.target.offsetWidth} * H: ${e.target.offsetHeight}`;
//     pop.appendChild(message);
//     document.body.appendChild(pop);
//
// };
//

// Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// onmouseover = function(e) {
//     this.target = e.target;
//     target.style.fontWeight = 'bold';
// };
// onmouseout = function (e){
//     this.target = e.target;
//     target.style.fontWeight = '300'
// }


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// let btn_prev = document.querySelector('#gallery .buttons .prev');
// let btn_next = document.querySelector('#gallery .buttons .next');
// let images = document.querySelectorAll('#gallery .photos img');
// let i = 0;
// btn_next.onclick = function () {
//     images[i].style.display = 'none';
//     i++
//     if (i >= images.length) {
//         i = 0;
//     }
//     images[i].style.display = 'block';
//     }
// btn_prev.onclick = function () {
//     images[i].style.display = 'none';
//     i = i - 1;
//     if (i < 0) {
//         i = images.length - 1;
//     }
//     images[i].style.display = 'block';
// }

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать
// как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


