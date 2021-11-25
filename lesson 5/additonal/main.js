// - Дано натуральное число n. Выведите все числа от 1 до n.
//
//  let natural = (n) =>{
//     for (let i = 1; i < n; i++) {
//         console.log(i)
//      }
//
//  }
//  natural(10);

// 2.- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

//   let number = (a,b) =>{
//    if (a < b ){
//        for (let i = a; i < b; i++) {
//            console.log(i);
//        }
//    }
//    else {
//        for (let i = a; i > b-1; i--) {
//            console.log(i);
//        }
//    }
//   }
// // number(20,10);
// // number(10,20);

 // let limit =  (a,b) =>{
 //    if (a <= b){
 //        console.log(a);
 //        if(a!==b){
 //            limit(a +1,b);
 //        }
 //
 //    }
 //    else {
 //        console.log(a);
 //        limit(a - 1,b);
 //
 //    }
 // }
 // limit(1,10);