document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('nav-toggle');
    const sidebar   = document.querySelector('.sidebar');
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});