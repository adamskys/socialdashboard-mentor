const input = document.querySelector('.switcher input');
const currentTheme = localStorage.getItem('data-theme');

if (currentTheme) {
  document.body.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
      input.checked = true;
      document.body.dataset.theme == 'light';
    }
}

input.addEventListener('change', (e) => {
  if(e.target.checked) {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
  } else {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
  }
});



