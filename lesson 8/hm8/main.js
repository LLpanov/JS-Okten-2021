// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний


// console.log(document.getElementById('content'));
// console.log(document.getElementById('rules'));
let p = document.getElementById('content');
p.innerText = 'Asdsad';
console.log(p);
let div =document.getElementById('rules');
div.innerText ='asdasdqdascarq';
console.log(div);

let Child = document.body.children;
for (const childElement of Child) {
    childElement.style.background ='red';
    childElement.style.color ='skyblue';

}
console.log(document.getElementById('rules').classList);


let element = document.getElementsByClassName('fc_rules');
for (const item of element) {
    item.style.color = 'red'
}

