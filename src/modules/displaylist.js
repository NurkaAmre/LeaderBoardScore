const apiKey = 'Cw1HUhz2DRmZdE3JLvOM';
const gameAPI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores/`;

// Get data from API
export const getValue = async () => {
  const response = await fetch(gameAPI).then((res) => res.json());
  return response.result;
};

const displayList = async () => {
  const results = await getValue();
  const scoreList = document.querySelector('.score-list');
  scoreList.innerHTML = '';
  for (let i = 0; i < results.length; i += 1) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i + 1}. ${results[i].user}</td>
                    <td> ${results[i].score}</td>`;
    scoreList.appendChild(tr);
  }
};

export default displayList;