export function getRecommandationsWithIds(idList) {
  const url = 'https://keekoo-mobile.xdev.ovh/API/index.php';

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: idList
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
