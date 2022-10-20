import './style.css';
import displayList from './modules/displaylist.js';
import postValue from './modules/post.js';
import { getValue } from './modules/displaylist.js';

const apiKey = 'Cw1HUhz2DRmZdE3JLvOM';
const gameAPI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`;
const refreshBtn = document.querySelector('.refresh');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  const user = document.getElementById('name');
  const score = document.getElementById('score');
  const formData = {
    user: user.value,
    score: score.value,
  };
  e.preventDefault();
  postValue(formData, gameAPI);
  user.value = '';
  score.value = '';
});

refreshBtn.addEventListener('click', () => {
  displayList();
});

displayList();
getValue();

export default gameAPI;
