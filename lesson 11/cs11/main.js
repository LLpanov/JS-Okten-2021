let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let btn = document.getElementById('btn');
btn.style.width = '150px'
btn.style.height = '60px'
for (let user of users) {
    let globaldiv = document.createElement('div')

    let div = document.createElement('div');
    div.style.width = "fit-content";
    div.style.background = 'yellow'

    div.innerText = JSON.stringify(user);

    let button = document.createElement('button');
    button.innerText = "Додати до улюблених";

    button.onclick = () => {
        let favorites = JSON.parse(localStorage.getItem('key')) || [];

        favorites.push(user);
        localStorage.setItem('key', JSON.stringify(favorites));
    }
    div.appendChild(button);
    globaldiv.appendChild(div)
    document.body.appendChild(globaldiv);


}

