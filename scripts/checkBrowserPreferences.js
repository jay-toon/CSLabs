function checkBrowserPreferences() {
    // Checks whether the stored cookie states whether the last theme used was dark or light mode, and applies it to the current session if necessary.
    // Ignores the application of themes if theme is set to dark mode in prior sessions, or hasn't been set.
    const theme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(theme);
    document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
    
    // Checks whether the stored cookie states whether the last theme used was dark or light mode, and applies it to the current session if necessary.
    // Ignores the application of themes if theme is set to dark mode in prior sessions, or hasn't been set.
    const fetchStyles = document.querySelectorAll('link[rel="stylesheet"]');
    let currentStyles = fetchStyles[1].getAttribute('href');
    if (currentStyles.includes('light')) {
        fetchStyles[1].setAttribute('href', currentStyles.replace('light', 'dark'));
    } else {
        fetchStyles[1].setAttribute('href', currentStyles.replace('dark', 'light'));
    }
}