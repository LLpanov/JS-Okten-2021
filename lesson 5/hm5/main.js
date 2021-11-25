// Всі функції повинні бути описані стрілочним типом!!!
//
//   let calc =  (a,b) => a + b;
// console.log(calc(10, 20));


// // 1.- створити функцію яка обчислює та повертає площу прямокутника висотою
//  let S = (a,b) => a * b;
// console.log(S(10, 2));


// 2.створити функцію яка обчислює та повертає площу кола
//
//   let s = (r) => 3.14 * (r ** 2);
// console.log(s(30));

// 3.- створити функцію яка обчислює та повертає площу циліндру
//    let H = (h,r) => Math.floor(Math.pow(3.14,2) * h * r);
//
//   console.log(H(1, 2));
//   document.write(`<h2>Площа бічної поверхні циліндру  =  ${H(1,2)} см2</h2>`);

// // 4.- створити функцію яка приймає масив та виводить кожен його елемен
//   let arr = (array) =>{
//     for (let item of array) {
//       console.log(item);
//     }
//   }
//   arr([1,2,3,4,5,65]);

// 5 створити функцію яка створює параграф з текстом. Текст задати через аргумент

    // let textcreater = (text) =>{
    // document.write(`<p>${text}</p>`);
    // document.write(`<p>${text}</p>`);
    // document.write(`<p>${text}</p>`);
    // }
    // textcreater("Boss")

// 6 .творити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

       //  let createrUl = (text) =>{
       // document.write(`<ul>`);
       //  document.write(`<li>${text}</li>`);
       //  document.write(`<li>${text}</li>`);
       //  document.write(`<li>${text}</li>`);
       // document.write(`</ul>`);
       //  }
       //  createrUl('OkTENS');

// 7.створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

    // let createrUl = (text,limit) =>{
    //  document.write(`<ul>`);
    //     for (let i = 0; i < limit; i++) {
    //         document.write(`<li>${text}</li>`)
    //
    //     }
    // }
    // createrUl('VASYA - 33',3);

// 8.створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//  let array = (arr) =>{
//      document.write(`<ol>`);
//      for (let item of arr) {
//          document.write(`<li>${item}</li>`);
//      }
//      document.write(`</ol>`)
//  }
//  array(['andriy',222,false]);

// // 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
//     let Addelement = (arr) =>{
//         for (let item of arr) {
//             document.write(`<div>${item.id} -${item.name} - ${item.age} </div>`);
//         }
//     }
//     Addelement([{id:1,name:'LOL',age:99}, {id:1,name:'LOL',age:99}, {id:1,name:'LOL',age:99}]);
