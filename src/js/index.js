import '../styles/main.scss';

const searchElem = document.querySelector('.search');
const inputElem = document.querySelector('.input');

inputElem.addEventListener('input', () => {
  searchElem.innerHTML = inputElem.value;
});
