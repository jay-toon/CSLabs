document.addEventListener('DOMContentLoaded', function() { // Once the webpage has fully loaded,
    if (!localStorage.getItem('theme')) { // and the theme hasn't been set in prior sessions...
        localStorage.setItem('theme', 'dark'); // Set the theme to dark mode (default)
    } else {
        document.body.classList.add(localStorage.getItem('theme')); // Otherwise, add the theme class to the body element
    }
});

window.addEventListener('beforeunload', function() { // Before the current page is unloaded, save the theme to local storage
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark'); // Ternary operator to save theme in one line
});