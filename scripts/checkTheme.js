document.addEventListener('DOMContentLoaded', function() { // Once the webpage has fully loaded,
    if (!localStorage.getItem('theme')) { // and  theme hasn't been set in prior sessions...
        localStorage.setItem('theme', 'dark'); // Set the theme to dark mode (default)
    }
});