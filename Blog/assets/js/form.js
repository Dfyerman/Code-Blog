
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameValue = username.value;
    const titleValue = title.value;
    const contentValue = content.value;   

    localStorage.setItem('User-name', usernameValue);
    localStorage.setItem('Title-name', titleValue);
    localStorage.setItem('Content-name', contentValue);

    


    window.location.href = "blog.html";
});


