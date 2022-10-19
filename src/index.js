import './style.css';
import displayList from './modules/displaylist.js';
import LeaderBoard from './modules/board.js';

const leaderArr = [{ user: 'Amre', score: 465 },
  { user: 'Nurka', score: 360 }];

const scoreInput = document.querySelector('#score');
const nameInput = document.querySelector('#name');
const refreshBtn = document.querySelector('.refresh');
const submitBtn = document.querySelector('.submit');
const leaderForm = document.querySelector('.second-part');

refreshBtn.addEventListener('click', () => {
  displayList();
});

submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  nameInput.value = '';
  scoreInput.value = '';
});

leaderForm.addEventListener('submit', () => {
  const leader = new LeaderBoard(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
  leaderArr.push(leader);
  displayList(leaderArr);
});
displayList(leaderArr);
