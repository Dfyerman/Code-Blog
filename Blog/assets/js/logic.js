const oldBlogs = JSON.parse(localStorage.getItem('Blog'))||[];
    oldBlogs.forEach(blog => {
        const container = document.createElement('div2');
        const title = document.createElement('p1');
        const content = document.createElement('p2');
        const username = document.createElement('p3');
        title.textContent = blog.title
        content.textContent = blog.content
        username.textContent = blog.username
        container.append(title, content, username);
        document.getElementById('posts').append(container);  
    });


function Light() {
    var element = document.body;

element.classList.toggle("dark-mode");
}


