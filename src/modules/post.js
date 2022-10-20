const postValue = async (formData, gameAPI) => {
  await fetch(gameAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      formData,
    ),
  })
    .then((response) => response.json())
    .then((data) => data.result);
};

export default postValue;
