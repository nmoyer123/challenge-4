document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post'); 
        postElement.innerHTML = `<h2 style="border-bottom: 2px solid black">${post.title}</h2> <p>${post.content}</p> <h3>by ${post.username}<h3/>`;
        postsContainer.appendChild(postElement);
    });
});

function toggleDarkMode() {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
}

