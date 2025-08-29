// Show year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
