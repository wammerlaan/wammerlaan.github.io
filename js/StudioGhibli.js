const BASE_URL = "https://ghibliapi.herokuapp.com";

export async function getAllFilms() {
  try {
    const response = await fetch(`${BASE_URL}/films`);
    const films = await response.json();
    return films;
  } catch (e) {
    console.log(e);
  }
}
