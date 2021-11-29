// 1.- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//
// function Cars(model, made, year, maxspeed, engine) {
//     this.model = model;
//     this.made = made;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (let item in this) {
//             if (typeof this[item] !== 'function') console.log(`${item} - ${this[item]}`)
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let avto = new Cars('Aston Martin', 'United Kigdom', 2020, 320, 5.0);
// console.log(avto);
// avto.drive();
// avto.info();
// avto.increaseMaxSpeed(20);
// avto.drive();
// avto.changeYear(2022);
// avto.info();
// avto.addDriver('David');
// console.log(avto);

// 2. ===> 1 (Те саме, тільки через клас)
//
// class Cars {
//
//     constructor(model, made, year, maxspeed, engine) {
//         this.model = model;
//         this.made = made;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//
//     info() {
//         for (const argumentsKey in this) {
//             console.log(`${argumentsKey}  ${this[argumentsKey]}`);
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }
// let avto = new Cars('Aston Martin', 'United Kigdom', 2020, 320, 5.0);
// console.log(avto);
// avto.drive();
// avto.info();
// avto.increaseMaxSpeed(10);
// avto.drive();
// avto.changeYear(2021);
// avto.info();
// avto.addDriver('Harry');
// console.log(avto);
//
//  3.  створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//      Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

//
// class popeluska {
//
//     constructor(username, age, foot) {
//         this.username = username;
//         this.age = age;
//         this.foot = foot;
//     }
// }
//
// let Popeluskas = [
//     new popeluska('Katty', 22, 36),
//     new popeluska('Hermiona', 21, 37),
//     new popeluska('Diana', 24, 40),
//     new popeluska('Afi', 26, 38),
//     new popeluska('Chin ZU', 29, 34),
//     new popeluska('Martina', 87, 41),
//     new popeluska('Gaia', 90, 37),
//     new popeluska('Roberta', 34, 33)
// ];
// console.log(Popeluskas);
//
// class Prince {
//     constructor(name, age, sizefound) {
//         this.name = name;
//         this.age = age;
//         this.sizefound = sizefound;
//     }
// }
//
// let princes = new Prince('Andriy', 23, 36);
//
// let x  = Popeluskas.find(value => value.foot === princes.sizefound);
// console.log(x);

// let parocka = (Popeluskas,princes) => {
//     for (const value of Popeluskas) {
//         if (value.foot === princes.sizefound) {
//             return `Твоя пара  ${value.username} `;
//         }
//
//     }
// }
// console.log(parocka( Popeluskas,princes));




