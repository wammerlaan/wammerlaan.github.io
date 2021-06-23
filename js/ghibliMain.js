import { getAllFilms } from "./StudioGhibli.js";

const searchbarInput = document.querySelector("#ghibliSearchBar");
const searchBtn = document.querySelector("#search-addon");
const title = document.querySelector(".title");
const suggestionList = document.querySelector(".suggestionList");

let filmsLoaded = false;
let allFilms;
async function main() {
  allFilms = await getAllFilms();
  filmsLoaded = true;
  console.log(allFilms);
}
main();

function searchGhibli() {
  console.log("Btncheck");
  if (filmsLoaded == true && searchbarInput.value != "") {
    let filterdFilms = allFilms.filter((film) =>
      film.title.match(new RegExp(searchbarInput.value, "i"))
    );
    suggestionList.innerHTML = "";
    for (let i = 0; i < filterdFilms.length; i++) {
      const li = document.createElement("li");
      li.textContent = filterdFilms[i].title;
      suggestionList.append(li);
    }
    console.log(filterdFilms);
  }
}
searchBtn.addEventListener("click", searchGhibli);
searchbarInput.addEventListener("keyup", searchGhibli);
suggestionList.addEventListener("click", function (event) {
  console.log(event);
  title.textContent = event.target.textContent;
});
