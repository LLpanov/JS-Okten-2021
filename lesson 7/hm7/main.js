// 1.- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let array = [];
// class User {
//
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
// let user1 = new User(1, 'Vasya', 'Pupkin', 'assd@gmail.com', 1656321126);
// // console.log(user1);
//
// let user2 = new User(2, 'Olyga', 'Pupkina', 'lol@mail.ru', 1555321234);
// // console.log(user2);
//
// let user3 = new User(3, 'Andriy', 'Dupa', 'dupa@mail.ru', 22266222);
// // console.log(user3);
//
// let user4 = new User(4, 'Ivan', 'Yaitce', 'yaitce@mail.ru', 2112266222);
// // console.log(user4);
//
// let user5 = new User(5, 'Stepan', 'Vyrvuzyb', 'zyb@yahoo.com', 32212412512);
// // console.log(user5);
//
// let user6 = new User(6, 'Oleg', 'Durka', 'dab@yahoo.com', 5555556764);
// // console.log(user6);
//
// let user7 = new User(7, 'Nastya', 'Sas', 'ravluk@yahoo.com', 6666666666);
// // console.log(user7);
//
// let user8 = new User(8, 'Mykola', 'Toyshomicolai', 'present@yahoo.com', 7777777777);
// // console.log(user8);
//
// let user9 = new User(9, 'Ivan', 'Gamaz', 'borsh@yahoo.com', 9999999999);
// // console.log(user9);
//
//
// let user10 = new User(10, 'Oleg', 'Kameryvyrybay', 'kamera@yahoo.com', 911111111);
// console.log(user10);

// array.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
// console.log(array);


// 3.- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

//  let filterid = array.filter((item) => {
//      if (item.id % 2 === 0){
//          return item;
//      }
//  });
// console.log(filterid);


// 4.- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// сделал наоборот потому что и так по зростанню было)

// let sortid = array.sort((a, b) => b.id - a.id);
// console.log(sortid);

// 5.- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client extends User {
//  constructor(id, name, surname, email, phone,order) {
//      super(id, name, surname, email, phone,order);
//      this.order = order;
//  }
// }
// let client1 = new Client(1, 'Vasya', 'Pupkin', 'assd@gmail.com', 1656321126,['ps5','xbox']);
// let client2 = new Client(2, 'Olyga', 'Pupkina', 'lol@mail.ru', 1555321234,['ps5',"disk"]);
// let client3 = new Client(3, 'Andriy', 'Dupa', 'dupa@mail.ru', 22266222,['ps4']);
// let client4 = new Client(4, 'Ivan', 'Yaitce', 'yaitce@mail.ru', 2112266222,['ps5pro','usb','applehome']);
// let client5 = new Client(5, 'Stepan', 'Vyrvuzyb', 'zyb@yahoo.com', 32212412512,['psVR','card','short','ball']);
// let client6 = new Client(6, 'Oleg', 'Durka', 'dab@yahoo.com', 5555556764,['ps','socks','some apple','T-shirt']);
// let client7 = new Client(7, 'Nastya', 'Sas', 'ravluk@yahoo.com', 6666666666,['ps3','iphone15','car']);
// let client8 = new Client(8, 'Mykola', 'Toyshomicolai', 'present@yahoo.com', 7777777777,['nitedo','car','bublegum']);
// let client9 = new Client(9, 'Ivan', 'Gamaz', 'borsh@yahoo.com', 9999999999,['PC','snikers','mars','milkyway','papers','house']);
// let client10 = new Client(10, 'Oleg', 'Kameryvyrybay', 'kamera@yahoo.com', 911111111, ['Dendi']);
// let empty = [client2,client3,client4,client5,client6,client7,client8,client9,client10];
// console.log(empty);
// let howmanyorderclienbuy = empty.sort((a, b) => a.order.length - b.order.length);
// console.log(howmanyorderclienbuy);
