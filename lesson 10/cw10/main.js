// 1- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// document.getElementById('btn').onclick = function () {
//     let name = document.forms.f1.name.value;
//     let secondname = document.forms.f1.secondname.value;
//     let age = document.forms.f2.age.value;
//     let work = document.forms.f2.work.value;
//
//     console.log(name, secondname, age, work);
// };
//
//
// 2.- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом

// let form = document.forms['table'];
// form.onsubmit = function (e) {
//     e.preventDefault();
//
//     let rows = +form.rows.value;
//     let column = +form.column.value;
//     let sentences = form.sentences.value;
//
//
// let table = document.createElement('table');
// for (let i = 0; i < rows; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < column; j++) {
//         let td = document.createElement('td');
//         td.innerText = sentences;
//         tr.appendChild(td);
//
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table);
// }

// 3.- Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['fuck', 'lol', 'shit'];
// let button = document.getElementById('bt');
// button.classList.toggle('chekbadword')
// button.onclick = function () {
//     let badword = document.getElementById('bad').value;
//     for (const word of badWords ) {
//         if (word === badword) {
//             alert('Не цензурне слово');
//         }
//     }
// };
//


// 4.- Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку

// let badWords =['Shit', 'Crap',"Fuck around",'Fucking ass','Bitch','Gay' ];
//  document.getElementById('knopka').onclick = function (){
//      let text = document.getElementById('bads').value;
//      for (let bads of badWords) {
//          if(text.includes(bads)){
//              alert('ХАМ');
//          }
//      }
//
// };
//

