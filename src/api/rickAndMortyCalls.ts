import axios from "axios";

export async function getCharactersByLink(link: string) {
  return axios.get(link).then((res) => res.data);
}

export async function getCharacters() {
  return axios
    .get(
      `https://rickandmortyapi.com/api/character
    `
    )
    .then((res) => res.data);
}

export async function getEpisodeByLink(link: string) {
  return axios.get(link).then((res) => res.data);
}

export async function getEpisodesByLinks(links: string[]) {
  let promises = [];
  for (let i = 0; i < links.length; i++) {
    promises.push(getEpisodeByLink(links[i]));
  }
  return Promise.all(promises)
    .then(function handleData(data) {
      return data;
    })
    .catch(function handleError(error) {
      console.log("Error" + error);
    });
}
