// 1.- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let text = document.getElementById('text');
// let button = document.getElementById('button');
// button.style.background = 'red';
// button.style.color = 'white';
// button.onclick = function () {
//     text.style.display = 'none';
//     button.ondblclick = function () {
//         button.style.display = 'none';
//     };
// };
//
// 3.cтворити інпут який приймає вік людини та кнопку яка підтверджує дію.\
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let btn = document.getElementById('btn');
// btn.onclick = function () {
//     let age = +document.getElementById('age').value;
//     if (!age) {
//         alert('ведіть цифру');
//     } else if (age < 18) {
//         alert("привет молокосос");
//         document.getElementById('age').style.background = 'red';
//
//     } else {
//         alert('ты не молокосос');
//         document.body.style.background = 'red'
//     }
//
// };
// 4.- Создайте меню, которое раскрывается/сворачивается при клике;

// let open = document.getElementById('open');
// let btn = document.getElementById("button1");
//
// btn.onmouseover = function (){
//     open.style.display= 'block';
// }
//
// btn.onmouseleave = function (){
//     open.style.display= 'none';
// }


// 5.- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comment = [
//     {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem4', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem5', body: 'lorem ipsum dolo sit ameti'},
// ];
// let divWrap = document.createElement('div');
//
// // comment.forEach(element => console.log(element))
// for (const element of comment) {
//     // console.log(element.body)
//     let allElement = document.createElement('div');
//     let title = document.createElement('h3');
//     let body = document.createElement('div');
//     let btn = document.createElement('button');
//
//     title.innerText = element.title;
//     body.innerText = element.body;
//     btn.innerText = 'Свернуть текст';
//     btn.onclick = () => {
//         body.style.display = `none`
//     }
//     allElement.append(title,body,btn);
//     divWrap.append(allElement);
// }
// document.body.append(divWrap);