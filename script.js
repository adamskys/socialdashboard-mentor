const input = document.querySelector('.switcher input');
const span = document.querySelector('.switcher span');



input.addEventListener('change', (e) => {
  result = (e.target.checked) ?
    document.body.setAttribute('data-theme', 'light')  :
    document.body.setAttribute('data-theme', 'dark')
});

