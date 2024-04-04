document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        let usernameValue = document.getElementById('username').value;
        let titleValue = document.getElementById('title').value;
        let contentValue = document.getElementById('content').value;

        localStorage.setItem('User-name', usernameValue);
        localStorage.setItem('Title-name', titleValue);
        localStorage.setItem('Content-name', contentValue);

        const newPost = document.createElement('div');
        newPost.classList.add('post');

        const postTitle = document.createElement('h2');
        postTitle.textContent = titleValue;

        const postContent = document.createElement('p');
        postContent.textContent = contentValue;

        const postAuthor = document.createElement('p');
        postAuthor.textContent = `By: ${usernameValue}`;

        newPost.appendChild(postTitle);
        newPost.appendChild(postContent);
        newPost.appendChild(postAuthor);

        document.body.appendChild(newPost);

        document.getElementById('username').value = '';
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';

        window.location.href = "blog.html"; // Redirect to the blog page
    });
});