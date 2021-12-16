// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then((response) => response.json())
//     .then((posts) => {
//         let container = document.createElement('div');
//         container.classList.toggle('wrap');
//
//         for (let post of posts) {
//             let div = document.createElement('div');
//             div.classList.toggle('card')
//             div.innerHTML = `<h3>UserID : ${post.userId}</h3>
//                             <h4>Id : ${post.id}</h4>
//                             <h5> Title : ${post.title}</h5>
//                             <h5>Body : ${post.body}</h5>`;
//
//             let button = document.createElement('button');
//             button.classList.toggle('btn');
//
//
//             button.onclick = (e) => {
//                 fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
//                     .then(response => response.json())
//                     .then(comments => {
//                         comments.forEach(comment => {
//                             let card = document.createElement('div');
//                             card.innerHTML = `<h3>ID: ${comment.id}</h3>
//                                 <h3>Name: ${comment.name}</h3>
//                                 <h4>Email: ${comment.email}</h4>
//                                 <h5>Body: ${comment.body}</h5>`;
//
//                             div.appendChild(card);
//
//                         })
//                         button.ondblclick =(e)=>{
//                             div.remove();
//                         }
//                     })
//             }
//             div.appendChild(button);
//             container.appendChild(div);
//             document.body.appendChild(container);
//         }
//     });

