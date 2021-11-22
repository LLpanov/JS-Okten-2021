// 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)(проверено на практике)
// function num(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b <c) {
//         console.log(b);
//     }
//     else if (c< a && c < b) {
//         console.log(c)
//     }
// }
//
// num(6, 5, 1);

// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!) (проверено на практике)

// function xxx(a,b,c){
// if(a > b && a > c){
//     console.log(a);
// } else if ( b > a && b > c){
//     console.log(b);
// } else if(c > a &&  c > b  ){
//     console.log(c);
// }
// }
//
// xxx(10,20,30);

// 3.створити функцію яка повертає найбільше число з масиву (проверено на практике)

//    let array =[1,2,3,45,200,6,7,8,9,1000];
//    function maxMassive (massive){
//        let maxelement = 0;
//        for (const element of massive) {
//            if(maxelement < element) {
//                maxelement = element;
//            }
//
//        }
//        return maxelement
//    }
//
// console.log(maxMassive(array));

// 4. створити функцію яка повертає найменьше число з масиву (проверено на практике)
//     let array =[-1,2,3,45,200,6,7,8,9,1000];
//     function minMassive (massive) {
//        let minelement = 0;
//        for (const element of massive) {
//            if(minelement > element){
//                minelement = element;
//            }
//        }
//      return minelement;
//    }
//  console.log(minMassive(array));

// 5.- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array =[1,2,3,4,5,2];
// function sumElement (massive) {
//     let x = 0;
//     for (const element of massive) {
//     x = element + x;
//     }
//     return x;
// }
// console.log(sumElement(array));


// 6.- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array =[1,2,3,3333,52222,3];
// function middle(massive) {
//  let x = 0;
//     for (const element of massive) {
//         x = element + x / massive.length;
//
//     }
// return Math.floor(x);
// }
// console.log(middle(array));

// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//    let array=[1,2,3,4,5];
//    function minmax (num){
//      let max = num[0];
//      let min = num[0];
//      for (const element of num) {
//         if (element>max){
//            max = element
//         }
//         if (element<min){
//            min = element;
//         }
//
//       }
//      console.log(max);
//      return min;
//    }
//    console.log(minmax(array));

// 8.- створити функцію яка заповнює масив рандомними числами
//        let array =[]
//        function randomes () {
//            for (let i = 0; i < 20; i++) {
//               array[i] = Math.round(Math.random()*100);
//            }
//            return array;
//         }
//         console.log(randomes(array));

// 9.створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let array =[]
// function randomest (massive,limit) {
//    for (let i = 0; i < massive ; i++) {
//       array[i] = Math.round(Math.random()*limit);
//    }
//    return array;
// }
// console.log(randomest(10,99));

// 10.Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(masive) {
//     let arr = [];
//     for (let i = masive.length - 1; i >= 0; i--) {
//         let element = masive[i];
//         arr.push(element);
//
//     }
//     return arr;
// }
//  console.log(reverse([1,2,3,4,5,6,7]));

//   function reverse (masif){
//   let Arr =  [];
//       for (let i = masif.length - 1,ri = 0 ; i >= 0; i--,ri++) {
//           Arr[ri] = masif[i]
//       }
//
//       return Arr;
//   }
// console.log(reverse([1,2,3,4,5,6,7]));
