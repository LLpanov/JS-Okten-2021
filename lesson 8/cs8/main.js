// a) змінює клас який впливаэ на колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// document.getElementById('main_header').classList.add('sept2021');

// b) робить шириниу елементу ul 400px
//
// let list = document.getElementsByTagName('ul');
// for (const listElement of list) {
//     listElement.style.width = '400px'
// }
//
//
// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let Elements = document.getElementsByClassName('linkList');
// for (const item of Elements) {
//     item.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// function addtext (text) {
// let Text = document.getElementsByClassName('listElement2');
// Text.innerText = text;
// return Text
// }
//
// console.log(addtext('text'));

// e)отримує всі елементи li та змінює ім колір фону на сірий

// let list = document.getElementsByTagName('li');
// for (const listElement of list) {
//     listElement.style.backgroundColor = 'silver'
//
// }
// f) отримує всі елементи 'a' та додає їм клас anchor

// for (const a of elements) {
//     a.classList.add('anchor');
// }
//
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elements = document.getElementsByTagName('a');
// for (const a of elements) {
//     if(a.innerText === 'link3'){
//      a.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elements = document.getElementsByTagName('a');
// for (const a of elements) {
//     let elements = a
//     a.classList.toggle(`element_XXX${a.innerText}`);
//
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let Sub = document.getElementsByClassName('sub-header');
// for (const item of Sub) {
//     item.style.backgroundColor = prompt('ведіть колір');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let Subchange = document.getElementsByClassName('sub-header');
// for (const item of Subchange) {
// if(item.innerText === 'content 2 segment' ){
//     item.style.backgroundColor = prompt('put the color')
// }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()


//  let Changetext = document.getElementsByClassName('content_1');
// for (const changetextElement of Changetext) {
//     changetextElement.innerText =  prompt('text');
// }

// l) отримати елементи p та змінити їм padding на 20px
//  let change = document.getElementsByTagName('p');
// for (const item of change) {
//     item.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let groupchange = document.getElementsByClassName( 'text2')
// for (const item of groupchange) {
//        item.innerText ='sep-2021'
// }
//
//
