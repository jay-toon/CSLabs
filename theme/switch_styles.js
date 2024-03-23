document.addEventListener('DOMContentLoaded', function() { // Once the webpage has fully loaded,
    if (localStorage.getItem('theme') === 'light') { // and the saved theme is light mode...
        let onSwitch = document.querySelector('input[type="checkbox"]'); // Declare the variable that finds the path to the toggle switch,
        onSwitch.setAttribute('checked', onSwitch.append('checked')) // Turn on the theme toggle switch,
        switchStyles(); // and finally call the switchStyles function to set the theme..
    }
});

function switchStyles() {
    // Find the <link> element with rel="stylesheet" as the identifier
    const fetchStyles = document.querySelectorAll('link[rel="stylesheet"]');
    let currentStyles = fetchStyles[1].getAttribute('href');
    // If the stylesheet contains the value "light"...
    if (currentStyles.includes('light')) {
        // Replaces 'light' with 'dark' in the href value, switching to light mode
        fetchStyles[1].setAttribute('href', currentStyles.replace('light', 'dark'));
        localStorage.setItem("theme", "dark");
    } else { // Else, replace 'dark' with light in the href value, which switches it to dark mode
        fetchStyles[1].setAttribute('href', currentStyles.replace('dark', 'light'));
        localStorage.setItem("theme", "light");
    }
}