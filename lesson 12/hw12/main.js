// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then((response) => response.json())
//     .then((users) => {
//         let container = document.createElement('div');
//         container.classList.toggle('wrap');
//
//         for (const user of users) {
//             let div = document.createElement('div');
//             let userid = document.createElement('h3');
//             userid.innerText = `Userid - ${user.userId}`;
//             let id = document.createElement('h4');
//             id.innerText = `Id - ${user.id}`;
//             let title = document.createElement('h5')
//             title.innerText = `Title -${user.title}`;
//             let body = document.createElement('p');
//             body.innerText = ` Body - ${user.body}`;
//
//
//             div.classList.toggle('target')
//             div.append(userid, id, title, body);
//             container.appendChild(div);
//
//
//             document.body.appendChild(container);
//         }
//
//     });
// 2.
//     Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((response) => response.json())
    .then((comments) => {
        let twoglobaldiv = document.createElement('div')
        twoglobaldiv.classList.add('wrap');

        for (const comment of comments) {
            let div = document.createElement('div');
            div.classList.toggle('comentars');
            div.innerHTML = `<h2>Post Id - ${comment.postId}</h2>
                             <h3>id - ${comment.id}</h3>
                             <h4>name - ${comment.name}</h4>
                             <h5>email - ${comment.email}</h5>
                             <span>Body :</span> ${comment.body}<p>`

            twoglobaldiv.appendChild(div);
            document.body.appendChild(twoglobaldiv);
        }
    });



