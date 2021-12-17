
let box = document.createElement('div');
box.classList.add('wraper');
let button = document.createElement("button");
button.classList.add('btn')
button.innerText = 'delete all';
button.onclick =() =>{
    localStorage.removeItem('key');
    clear()
}
let clear = () => {
    box.innerHTML = '';
    let divmass = JSON.parse(localStorage.getItem('key'));
    for (const element of divmass) {
        let divElement = document.createElement('div');
        divElement.classList.add('target')
        let button2 = document.createElement("button");
        button2.classList.add('btn')
        button2.innerText ='delete'
        divElement.innerHTML = `
<h2> Назва продукту : ${element.name}</h2> 
  <h3> Кількість товарів : ${element.count} </h3>
  <h3> Ціна товару : ${element.price} <span>$</span> </h3>
  <img src="${element.image}" alt="aa">
    `

        button2.addEventListener('click', function () {
            const index = divmass.findIndex(value => value.id === element.id);
            divmass.splice(index, 1);
            localStorage.setItem('key', JSON.stringify(divmass))
            clear()

        })
        divElement.appendChild(button2)
        box.appendChild(divElement)
    }
}

clear();
box.append(button)
document.body.append(box);


