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

