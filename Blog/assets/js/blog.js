document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('User-name');
    const title = localStorage.getItem('Title-name');
    const content = localStorage.getItem('Content-name');
    

    

    
    document.getElementById('User-name').textContent = username;
   document.getElementById('Title-name').textContent = title;
    document.getElementById('Content-name').textContent = content;





});
