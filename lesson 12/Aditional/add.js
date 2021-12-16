// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let container = document.createElement('div');
        container.classList.toggle('wrap');
        users.forEach(user => {
            // console.log(user);
            let block = document.createElement('div');
            block.classList.toggle('blocks');
            block.innerHTML = `<h4> ID: ${user.id}</h4>
                                <h4>Name: ${user.name}</h4>
                                <h4>username:${user.username}</h4>
                                <h4>email: ${user.email}</h4>
                                <h4>address: ${user.address.street}</h4>
                                <h4>suite: ${user.address.suite}</h4>
                                <h4>city: ${user.address.city}</h4>
                                <h4> zipcode : ${user.address.zipcode}</h4>`;

            let button = document.createElement('button')
            button.innerText = "open post";
            block.appendChild(button);
            container.append(block);
            document.body.appendChild(container);

            button.onclick = (e) => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then((response) => response.json())
                    .then(posts => {
                        for (let post of posts) {
                            // console.log(post);
                            let block2 = document.createElement('div');
                            block2.style.background ='#50D778'
                            // block2.classList.toggle('blocks');
                            block2.innerHTML = `<h4> userId: ${post.userId}</h4>
                            <h4>Id: ${post.id}</h4>
                            <h4>title:${post.title}</h4>
                            <h4>body: ${post.body}</h4>`

                            let button2 = document.createElement('button');
                            button2.innerText = 'open comments'

                            block2.appendChild(button2);
                            block.appendChild(block2);

                            button2.onclick = (e) => {
                                fetch('https://jsonplaceholder.typicode.com/post/' + post.id + '/comments')
                                    .then((response) => response.json())
                                    .then(comments => {
                                        for (let comment of comments) {
                                            // console.log(comment);
                                            let block3 = document.createElement('div');
                                            block3.style.background ='#FB806A'
                                            block3.innerHTML = `<h4> postID: ${comment.postId}</h4>
                                                                <h4>id: ${comment.id}</h4>
                                                                <h4>name:${comment.name}</h4>
                                                                 <h4>email: ${comment.email}</h4>
                                                                 <h4>Body: ${comment.body}</h4>`

                                            block2.appendChild(block3);


                                        }

                                    });
                            }

                        }

                    });
            };
        })


    });

