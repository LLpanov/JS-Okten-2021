// 1.- Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = "hello world";
// console.log(a.length);
//
// let b = 'lorem ipsum';
// console.log(b.length);
//
// let c = 'javascript is cool';
// console.log(c.length);

// 2. Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = "hello world";
// let Uppercase1 = a.toUpperCase();
// console.log(Uppercase1);
//
// let b = 'lorem ipsum';
// let Upprecase2 = b.toUpperCase();
// console.log(Upprecase2);
//
// let c ='javascript is cool'
//  let Uppercase3 =c.toUpperCase();
// console.log(Uppercase3);
//
// let a = "hello world";
// let b = 'lorem ipsum'
// let c = 'javascript is cool';
// let Uppercase = a.toUpperCase()+ ' ' + b.toUpperCase() +' '+ c.toUpperCase();
// console.log(Uppercase);
//

// 3.Перевести до нижнього регістру настипні стрінгові значення

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS';
// console.log(a.toLowerCase() + ' ' + b.toLowerCase() + ' ' + c.toLowerCase());

// 4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//  let str = ' dirty string   ';
//  console.log(str.trim());

// 5.- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let sstringToarray = (str) =>{
//     return str.split(' ,');
// }
// let str = 'Каждый охотник желает знать';
// let arr = sstringToarray(str);
// console.log(arr);
// document.write(`<h1>${arr}</h1>`);

// 6.- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, length) => {
//     return str.substring(str, length);
// }
// let str = 'Каждый охотник желает знать';
// console.log(str.length);
// console.log(delete_characters(str, 6));
// document.write(delete_characters(str, 6));

// 7.Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     let ReplaceJoinUpper =  str.replaceAll(' ','-').toUpperCase();
//     return ReplaceJoinUpper;
//
// }
// console.log(insert_dash(str));
// document.write(insert_dash(str));
//
//
// 8. Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.


// let fnow = (str) =>{
//     return str[0].toUpperCase() + str.slice(1);
//
// }
// console.log(fnow('okten'));

// 9. - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

//  let capitalize = (str) =>{
//     return str.split(' ').map( text => text.charAt(0).toUpperCase() + text.substring(1)).join(' ');
//  }
// console.log(capitalize("nice to meet you"));

