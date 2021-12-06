const API_TOKEN = "baf284c";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://www.omdbapi.com/?apikey=' + API_TOKEN + '&t=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}