function toggleDarkMode() {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
}



document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (!username || !title || !content) {
        alert("Please complete all fields before submitting.");
        return;
    }
    
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push({ username, title, content });
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    
    window.location.href = 'blog.html'; // Redirect to posts page
});
