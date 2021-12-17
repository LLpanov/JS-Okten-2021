// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let a = document.getElementById('product-name');
let b = document.getElementById('how-many');
let c = document.getElementById('price');
let d = document.getElementById('img');
d.src = d.value;
let button = document.getElementById('btn')
let key = 'xxx'


    button.onclick = (e) => {
        e.preventDefault();

        let product = JSON.parse(localStorage.getItem('key')) || [];
        product.push({
            id: product[product.length - 1]?.id + 1 || 1,
            name: a.value,
            count: b.value,
            price: c.value,
            image: d.value
        })
        localStorage.setItem('key', JSON.stringify(product));

    }


