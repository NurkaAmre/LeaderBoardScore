const scoreInput = document.querySelector('#score');
const nameInput = document.querySelector('#name');

const gameAPI ='https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9ITEmF74CoOik3TP4T9d/scores/';

const postValue = async (user, score) => {
    await fetch(gameAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      user,
      score,
      }),
    })
    .then((response) => response.json())
    .then((data) => data.result);
  };

export default postValue;