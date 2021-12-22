let box = document.createElement('div');
box.classList.toggle('wrap');


let url = new URL(location.href);
let posts = url.searchParams.get('data');
let post = [JSON.parse(posts)];

for (const allpost of post) {
    let div = document.createElement('div');
    div.classList.toggle('target');
    div.innerHTML = `<h2> User Id : ${allpost.userId}</h2>
                     <h2> Id : ${allpost.id}</h2>
                     <h4> Title : ${allpost.title}</h4>
                     <h4> Body : ${allpost.body}</h4>`;

    box.appendChild(div);

}
document.body.appendChild(box);


fetch(`https://jsonplaceholder.typicode.com/posts/${post[0].id}/comments`)
    .then((response) => response.json())
    .then((comments) => {

        for (const comment of comments) {
            console.log(comment);
            let comentdiv = document.createElement('div');
            // comentdiv.classList.toggle('active');


            comentdiv.innerHTML = `<p> <span>Post ID</span>:${comment.postId}</p>
                                    <p> <span>Id</span>:${comment.id}</p>
                                    <p> <span>Name</span>:${comment.name}</p>
                                    <p> <span>Email</span>:${comment.email}</p>
                                    <p> <span>Body</span>:${comment.body}</p>`
            let names = document.createElement('div');
            let split = comment.email.split("@")[0].split("_").join(" ").split(".").join(" ");
            names.innerHTML = `<span>Name:</span> ${split}`;
            names.classList.toggle('active');
            names.appendChild(comentdiv)
            box.appendChild(names);
        }


    });

