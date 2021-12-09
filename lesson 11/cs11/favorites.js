let favorites = JSON.parse(localStorage.getItem('key'));
for (const favorite of favorites) {
    let div = document.createElement('div');
    let button = document.createElement('button');
    button.innerText ='delete your history'
    let ul = document.createElement('ul');
    let li = document.createElement('li')
    li.style.background = 'lightgreen'
    li.style.width ='fit-content'
    button.onclick =()=>{
        localStorage.removeItem('key')
    }
    li.innerText = JSON.stringify(favorite);
    div.append(ul,li,button)

    document.body.appendChild(div);

}












