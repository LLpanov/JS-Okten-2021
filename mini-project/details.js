let container = document.createElement('div');
container.classList.add('wrap');

// let cardDetails = [JSON.parse(localStorage.getItem('key'))];
let url = new URL(location.href);
let users = url.searchParams.get('data');
let user = [JSON.parse(users)];
// console.log(user);


for (const details of user) {
    // console.log(details)
    let card = document.createElement('div');
    card.classList.toggle('target');
    let button = document.createElement('button');
    button.classList.toggle('btn');
    button.innerText = 'post of current user'
    card.innerHTML = `<h3>User id : ${details.id}</h3>
                    <h3> Name : ${details.name}</h3>
                    <h3> username : ${details.username}</h3>
                    <h4> email: ${details.email}</h4>
                    <h4> street : ${details.address.street}</h4>
                    <h4> suite : ${details.address.suite}</h4>
                    <h4> City : ${details.address.city}</h4>
                    <h4> zipcode : ${details.address.zipcode}</h4>
                    <h4> Geo lat : ${details.address.geo.lat}</h4>
                    <h4> Geo lng : ${details.address.geo.lng}</h4>
                    <h4> Phone: ${details.phone}</h4>
                    <h4> Website : ${details.website}</h4>
                    <h4> Company name : ${details.company.name}</h4>
                    <h5> catchPhrase : ${details.company.catchPhrase}</h5>
                    <h5> bs : ${details.company.bs}</h5>`

    card.appendChild(button);
    container.appendChild(card);
    document.body.appendChild(container);


    button.onclick = (e) => {
        e.preventDefault();
        button.innerText = 'Hide details';

        fetch('https://jsonplaceholder.typicode.com/users/' + details.id + '/posts')
            .then((response) => response.json())
            .then((posts) => {
                let box = document.createElement('div')
                box.classList.toggle('boxstyle');
                box.classList.toggle('hiden');
                for (const post of posts) {
                    console.log(post);
                    let userTittle = document.createElement('div');
                    userTittle.classList.toggle('titlestyle');
                    userTittle.classList.toggle('titles');
                    let button2 = document.createElement('button');
                    button2.classList.toggle('bat');
                    button2.innerText = 'Show post details'
                    userTittle.innerHTML = `<p>Title : ${post.title}</p>`;

                    userTittle.appendChild(button2);
                    box.appendChild(userTittle)
                    card.appendChild(box);


                    button2.onclick = (e) => {
                        e.preventDefault();
                        window.open('post-details.html?data=' + JSON.stringify(post));


                    };


                }
                button.onclick = (e) => {
                    e.preventDefault()
                    box.classList.remove('hiden');
                    button.innerText = "post of current user"
                    location.reload();

                }


            });


    }
}







