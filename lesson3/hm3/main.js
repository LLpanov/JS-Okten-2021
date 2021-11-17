// 1 . --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

    // let a = [1,2,3,4,5];
    // let b = ["lol","lol","lol","lol",];
    // let c = ['boom',"boom","boom","boom","boom",1,2,3,4,5,false,true,false,true,true,];
    // console.log(a);
    // console.log(b);
    // console.log(c);
    //
  //
  //  let a = [1,2,3,4,5];
  // for(let a=1;a<6;a++){
  //     console.log(a);
  // }

// 2.-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

    // let a = [];
    // a[0] = 1;
    // a[1] = 2;
    // a[2] = false;
    // a[3] = "lol";
    // console.log(a);

// 3.- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

  // for(let i=0;i<10;i++){
  //     document.write(`<div>Doom</div>`);
  // }
  // for(let i=0;i<10;i++){
  //     document.write(`<div>${i}lolololol</div>`);
  // }

//  let x = 0;
// while(x<21){
//     document.write(`<div><h2>lol</h2></div>`);
//     x++;
// }

  // let y =0;
  // while(y<21){
  //     document.write(`<h1>${y}- okten pokten</h1>`);
  //     y++;
  // }
// 4.- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

//   let dan = [1,2,3,4,5,6,7,8,9,10,];
//   for(let y=0; y <dan.length; y++){
//       console.log(dan[y]);
// }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // let dan = ['decorate','christmas','tree','costume','tasty','meal','presents','flower','fireworks','market'];
    // for(let y=0;y< dan.length;y++ ){
    //     document.write(`<h2>${dan[y]}</h2>`);
    // }
// !!!!!!!!!!!!!!!!!!!!!
//   let dan= [1,'two',false, 2 ,'two', false, 3,'two',false,true];
//    for(x=0; x<dan.length;x++){
//        document.write(`<h1>${dan[x]}</h1>`);
//    }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // let dan= [1,'two',false, 2 ,'two', false, 3,'two',false,true];
    //  for(x=0; x < dan.length;x++){
    //      if (typeof dan[x] ==='number'){
    //      console.log(dan[x]);
    //      }
    //  }

     // let dan= [1,'two',false, 2 ,'two', false, 3,'two',false,true];
     // for(x=0; x < dan.length;x++){
     //     if (typeof dan[x] ==='string'){
     //     console.log(dan[x]);
     //     }
     // }

     // let dan= [1,'two',false, 2 ,'two', false, 3,'two',false,true];
     // for(x=0; x < dan.length;x++){
     //     if (typeof dan[x] ==='boolean'){
     //     console.log(dan[x]);
     //     }
     // }
     //
     //
// 5.- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

//   let a = [];
//   a[0]=false;
//   a[1]=33;
//   a[2]='какашка';
//   a[3]=111;
//   a[4]='lol';
//   a[5]='lucky';
//   a[6]=26;
//   a[7]='aircraft';
//   a[8]=true;
//   a[9]=110;
//   console.log(a);
// for (let i = 0; i < 10; i++) {
//   console.log(a[i]);
//   document.write(`<h2>${a[i]}</h2>`);
// }
// let a = [];
//   a[0]=false;
//   a[1]=33;
//   a[2]='какашка';
//   a[3]=111;
//   a[4]='lol';
//   a[5]='lucky';
//   a[6]=26;
//   a[7]='aircraft';
//   a[8]=true;
//   a[9]=110;
// for (let i = 0; i < 100; i++) {
//    console.log(i);
//    document.write(`<h2>${i}</h2>`);
//
// }
// let a = [];
//   a[0]=false;
//   a[1]=33;
//   a[2]='какашка';
//   a[3]=111;
//   a[4]='lol';
//   a[5]='lucky';
//   a[6]=26;
//   a[7]='aircraft';
//   a[8]=true;
//   a[9]=110;
//   for (let i = 0; i < 100; i+=2){
//   console.log(i);
//   document.write(`<h2>${i}</h2>`);
//        }

// let a = [];
//   a[0]=false;
//   a[1]=33;
//   a[2]='какашка';
//   a[3]=111;
//   a[4]='lol';
//   a[5]='lucky';
//   a[6]=26;
//   a[7]='aircraft';
//   a[8]=true;
//   a[9]=110;
// for (let i = 0; i < 100; i++){
//     if(i%2 ===0){
//         console.log(i);
//         document.write(i);
//     }
// }

// let a = [];
//   a[0]=false;
//   a[1]=33;
//   a[2]='какашка';
//   a[3]=111;
//   a[4]='lol';
//   a[5]='lucky';
//   a[6]=26;
//   a[7]='aircraft';
//   a[8]=true;
//   a[9]=110;
// for (let i = 0; i < 100; i++){
//      if(i % 2 !== 0){
//         console.log(i);
//         document.write(i);
//     }
// }