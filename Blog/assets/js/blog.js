const form = document.getElementById('form');
    const oldBlogs = JSON.parse(localStorage.getItem('Blog'))||[];




form.addEventListener('submit', function(event) {
    event.preventDefault();


    const username=document.getElementById('username');
    const title=document.getElementById('title');
    const content=document.getElementById('content');

    let newBlog = {
        username: username.value,
        title: title.value,
        content: content.value,
        
    }
    
    oldBlogs.push(newBlog);
    
    localStorage.setItem('Blog', JSON.stringify(oldBlogs));

    window.location.href = "blog.html";
});

function Light() {
    var element = document.body;

element.classList.toggle("dark-mode");
}