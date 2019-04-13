export function getRecommandationsWithIds(idList) {
  const url = 'https://keekoo-mobile.xdev.ovh/API/index.php';

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      idRecommandations: idList
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getQuestionsWithId(idQuestions) {
  const url = 'https://keekoo-mobile.xdev.ovh/API/getQuestion.php';

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: idQuestions
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
