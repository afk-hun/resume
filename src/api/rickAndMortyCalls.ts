import axios from "axios";

export async function getCharacters() {
  return axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => res.data);
}
