// Всі функції повинні бути описані стрілочним типом!!!!
// 1.створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let Min = (a, b, c) => {
//     if (a < b && b < c) {
//         console.log(a);
//     }
//     if (b < a && b < c) {
//         console.log(b);
//     }
//     if (c < a && c < b) {
//         console.log(c);
//     }
// }
//  Min(4,-2,3);

// 2.створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let Max = (a,b,c) => {
//     if (a > b && b > c){
//         console.log(a);
//     }
//     if (b > a && b > c){
//         console.log(b);
//     }
//     if (b > a && c > b){
//         console.log(c);
//     }
// }
// Max(-1,3,200);

// 3 .створити функцію яка повертає найбільше число з масиву
// let array =[1,2,3,45,200,6,7,8,9,1000,2000];
// let Maxnumber = (array) => {
//     let maxnum = array[0];
//     for (let item of array) {
//         if (item > maxnum) {
//             maxnum=item;
//         }
//     }
//     console.log(maxnum);
//     return maxnum;
// }
// Maxnumber(array);

// 4. створити функцію яка повертає найменьше число з масиву

// let array =[5,2,3,45,200,6,7,8,-9,1000,-2000,-100];
// let Minnum = (arr) =>{
//     let min =arr[0];
//     for (let arrElement of arr) {
//         if(arrElement < min){
//             min = arrElement;
//         }
//     }
//     return min;
// }
// console.log(Minnum(array));
//  5.створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [1,2,3,4,5];
// let SUM = (arr) =>{
//  let x = 0;
//     for (let index of arr) {
//         x += index ;
//
//     }
//     console.log(x)
//     return x;
// }
// SUM(array);

// 6.створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array = [1,2,3,4,5,6,189];
// let middlenum = (arr) =>{
//     let x = 0;
//     for (let index of arr) {
//         x = (index + x) / arr.length
//     }
//     console.log(x);
//     return  x;
// }
// middlenum(array);

// 7.створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMax = (arr) =>{
//   let min = arr[0];
//    let max = arr[0];
//     for (let index of arr) {
//         if(index > max ){
//             max = index;
//         }
//         if (index < min){
//             min = index
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// minMax([-100,2,3,4,5]);

// .8.- створити функцію яка заповнює масив рандомними числами

// let randoms = (arr) => {
//     let empty = []
//     for (let i = 0; i < arr ;i++) {
//
//         empty[i] = Math.round(Math.random()*100);
//     }
//     return empty;
// }
// console.log(randoms(5));

// 9.створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let randolim = (array,limit) =>{
//  let empty = [];
//     for (let i = 0; i < limit; i++) {
//         empty.push(Math.round(Math.random()*limit))
//     }
//     console.log(empty);
//     return empty;
// }
// randolim(100,2);

// 10.Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let reverse = (array) => {
//     let empty = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         empty.push(array[i]);
//     }
//     console.log(empty);
//     return empty;
// }
// reverse([1,2,3]);

 // let reverse = (array) => {
 //    let empty =[];
 //     for (let i = array.length - 1, ri = 0 ;  i >= 0; i-- ,ri++ ) {
 //          empty[ri] = array[i];
 //
 //     }
 //     console.log(empty);
 //     return empty;
 // }
 // reverse([1,2,3]);
 //
