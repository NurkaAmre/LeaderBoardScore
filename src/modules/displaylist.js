const displayList = (arr) => {
  const scoreList = document.querySelector('.score-list');
  scoreList.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i + 1}. ${arr[i].user}</td>
                      <td> ${arr[i].score}</td>`;
    scoreList.appendChild(tr);
  }
};

export default displayList;