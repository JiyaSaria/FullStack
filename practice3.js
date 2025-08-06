const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

toggle.addEventListener('change', () => {
  root.setAttribute('data-theme', toggle.checked ? 'dark' : 'light');
});
