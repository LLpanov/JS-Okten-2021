// 1 .створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//  function plosha (a, b) {
//      let res = a * b;
//      return res;
//  }
// let x =plosha(10,10);
//  console.log(x);

// 2.- створити функцію яка обчислює та повертає площу кола з радіусом r

//    function radius (a){
//     let r = Math.pow(a,2);
//        const p = 3.14;
//     let result = p*r
//
//      return(result);
//    }
//
// document.write( `<h2>Plosha kruga = ${radius(20)}</h2> `);


// 3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//  S= 2ПRh
//
//     function Scilinder (h,r){
//     const p =3.14*2;
//     let plosha = Math.floor(p * h * r);
//     return(plosha);
//    }
//    console.log(Scilinder(30,5));
//

// 4.- створити функцію яка приймає масив та виводить кожен його елемент

    // let massive = [1, 2, 3, 4, 5,];
    //
    // function  addMassive (massive) {
    //     for (let i = 0; i < massive.length; i++) {
    //     console.log(massive[i]);
    //     }
    // }
    // addMassive(massive);



  //   let massive = [1, 2, 3, 4, 5,];
  //   function  addMassive (massive) {
  //       for (const i  of massive) {
  //           console.log(i);
  //           // return(i);
  //       }
  //   }
  // addMassive(massive);

// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
//  function createparagraph(text) {
//
//     document.write(`<h2> ${text}</h2>`);
//
//  }
//  createparagraph("danbalan");

// 6.творити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

   // function createUl(a){
   //  document.write(`<ul>`);
   //      document.write(`<li>${a}</li>`);
   //      document.write(`<li>${a}</li>`);
   //      document.write(`<li>${a}</li>`);
   //  document.write(`</ul>`);
   // }
   // createUl('Harry Potter');
// 7.створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

        // function createUl(a){
        //     for (let i = 0; i < 3; i++) {
        //         document.write(`<ul>`);
        //              document.write(`<li>${a}</li>`);
        //       document.write(`</ul>`);
        //     }
        // }
        // createUl("harry shproter");

// 8.створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

    // let element =[1,false,'hello'];
    // function createElement(element){
    //     document.write(`<ul>`);
    //     for (const i of element) {
    //         document.write(`<li>${i}</li>`);
    //     }
    //     document.write(`</ul>`);
    // }
    // createElement(element);


// 9.створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
//     let massive = [{id:1,name:'LOL',age:99}, {id:1,name:'LOL',age:99}, {id:1,name:'LOL',age:99}];
//     function addMassive(massive){
//         for (const i of massive) {
//
//             document.write(`<div>${i.id} - ${i.name} - ${i.age} </div>`);
//             document.write(`<div>${i.id} - ${i.name} - ${i.age} </div>`);
//             document.write(`<div>${i.id} - ${i.name} - ${i.age} </div>`);
//
//
//         }
// }
//  addMassive(massive);
