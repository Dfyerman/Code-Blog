
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let newBlogs = oldBlogs.push();
    let oldBlogs = JSON.parse(localStorage.getItem('Blog'));


    let usernameValue = username.value;
    let titleValue = title.value;
    let contentValue = content.value;   

    localStorage.setItem('User-name', usernameValue);
    localStorage.setItem('Title-name', titleValue);
    localStorage.setItem('Content-name', contentValue);

    
    

    window.location.href = "blog.html";
});


