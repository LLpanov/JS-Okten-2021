// 1.// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div');
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// div.style.backgroundColor = 'blue';
// div.style.color = 'red';
// div.style.fontSize = '40px';
//
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// document.body.appendChild(div);
//
// console.log(document.body.appendChild(div.cloneNode(true)));
// 2.  - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let array = ['Main', 'Products', 'About us', 'Contacts'];
// let menu = document.getElementsByClassName('menu')[0];
// for (const item of array) {
//     let li = document.createElement('li');
//     li.innerText = item;
//
//
//     menu.appendChild(li);
// }
//
// 3 . - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//     {title: 'Frontend', monthDuration: 4}

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const item of coursesAndDurationArray) {
//     let block = document.createElement('div');
//     block.innerText = (`${item.title} - ${item.monthDuration}`);
//
//
//
//     let htmlDivElement = document.body.appendChild(block);
// }

// 4. - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const index of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item')
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     let p = document.createElement('p');
//     p.classList.add('description');
//
//     h1.innerText = index.title
//     p.innerText = index.monthDuration
//
//
//     div.appendChild(h1)
//     div.appendChild(p)
//     document.body.appendChild(div);div.appendChild(h1)
//
// }