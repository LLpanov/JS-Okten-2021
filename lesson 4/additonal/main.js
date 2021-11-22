// 1.- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function XXX(argument1, argument2) {
//     if (typeof argument2 === "undefined") {
//         console.log(argument1);
//     } else {
//         console.log(argument1 + argument2);
//     }
//
//
// }
//
// XXX(33, 'asd');
//
// 2.- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// debugger;
//   function sublin (arr1,arr2){
//     let arr3= []; =
//       for (let i = 0; i < arr2.length; i++) {
//        arr3.push(arr1[i] + arr2[i]);
//
//       }
//     return arr3;
//   }
// console.log(sublin([1,2,3],[2,3,5,]));

// 3.- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//     EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


 // let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
 //
 //  function createkey(arr){
 //      let newarray = [];
 //      for (let newarrayElement of arr) {
 //          for (let key in newarrayElement) {
 //              newarray.push(key);
 //          }
 //
 //      }
 //      return newarray;
 //  }
 //
 //  console.log(createkey(array))


// 4.- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

   // let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
   // function creater (arr){
   //     let newArr = [];
   //     for (let newArrElement of arr) {
   //         for (let item in newArrElement) {
   //             newArr.push(newArrElement[item]);
   //
   //         }
   //     }
   //       return newArr;
   // }
   // console.log(creater(array));

 // непонял как сделать без пуша не получалось(



