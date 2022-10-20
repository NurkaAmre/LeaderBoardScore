import './style.css';
import displayList from './modules/displaylist.js';
import postValue from './modules/post.js';
import createGame from './modules/addGame';

const scoreInput = document.querySelector('#score');
const nameInput = document.querySelector('#name');
const refreshBtn = document.querySelector('.refresh');
const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  postValue();
  nameInput.value = '';
  scoreInput.value = '';
});

displayList();
createGame();

refreshBtn.addEventListener('click', () => {
  displayList();
});



