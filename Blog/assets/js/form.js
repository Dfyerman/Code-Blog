const form = document.getElementById('BlogForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const Username = document.getElementById('Username').value;
    const Title = document.getElementById('Title').value;
    const Content = document.getElementById('Content').value;

    const formData = {
        Username: Username,
        Title: Title,
        Content: Content
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    form.reset();
});



