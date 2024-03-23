function setTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(theme);
    document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
}