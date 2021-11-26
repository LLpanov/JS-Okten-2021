// // 1. - Дано список імен.
// // let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// // let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry.................Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'
// //
// let validname = (name, symbol) => {
//     let empty = [];
//     if (name.includes(symbol)) {
//         let a = name.split(symbol);
//
//         a.forEach((item) => {
//             if (item) {
//                 empty.push(item);
//             }
//         })
//       return empty.join(' ');
//
//     }};
//     console.log(validname(n2, '-'))

// let validname = (name) => {
//     name.replaceAll('__', ' ').replaceAll('__', ' ').replaceAll('---', ' ')
//     return name;
// };
//
//
// console.log(validname(n1));


// 2.- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

//  let randoms = (array,limit) =>{
//     let empty = [];
//      for (let i = 0; i < array; i++) {
//          empty.push((Math.floor(Math.random() * limit)));
//      }
//      return empty;
//  };
// console.log(randoms(10,100));

// 3.- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

//  let randoms = (array,limit) =>{
//     let empty = [];
//      for (let i = 0; i < array; i++) {
//          empty.push((Math.floor(Math.random() * limit)));
//      }
//      return empty;
//  };
// console.log(randoms(10,10).sort(( a, b ) =>  b - a));
// // or( a, b ) =>  b - a)

// 4.- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let randoms = (array,limit) =>{
//     let empty = [];
//      for (let i = 0; i < array; i++) {
//          empty.push((Math.floor(Math.random() * limit)));
//      }
//
//      return empty
//  };
// console.log(randoms(10,100).filter(index =>index % 2 === 0));

// 5.Cтворити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let randoms = (array,limit) =>{
//     let empty = [];
//      for (let i = 0; i < array; i++) {
//          empty.push((Math.floor(Math.random() * limit)));
//      }
//      return empty;
//  };
// console.log(randoms(10,100).map(index =>index.toString()));

// 6.Cтворити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// let sortNums = (array ,direction) => {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b);
//     }
//     else if(direction === 'descending'){
//         return array.sort((a, b) => b - a);
//     }
// }
// console.log(sortNums([11,21,3],"descending"));

// 7.- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// //  let sortspadd = coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration);
// // console.log(sortspadd);
// //  let mounth = coursesAndDurationArray.filter((value) => {
// //     if(value.monthDuration >= 5){
// //         return value
// //     }
// //  });
// // console.log(mounth)
//
// let mounth = coursesAndDurationArray.filter((item) => item.monthDuration>5);
// console.log(mounth);
