import { getAllFilms } from "./StudioGhibli.js";

const searchbarInput = document.querySelector("#ghibliSearchBar");
const searchBtn = document.querySelector("#search-addon");
const title = document.querySelector(".title");
const suggestionList = document.querySelector(".suggestionList");
const pageBanner = document.querySelector(".banner");

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

  function changeTheme() {
    if (event.target.innerHTML == "Castle in the Sky") {
      console.log("working!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "Grave of the Fireflies") {
      // GRAVE OF THE FIREFLIES THEME
      console.log("grave works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "My Neighbor Totoro") {
      // MY NEIGHBOUR TOTORO THEME
      console.log("totoro works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "Kiki's Delivery Service") {
      // KIKI'S DELIVERY SERVICE THEME
      console.log("kiki's works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "Only Yesterday") {
      // ONLY YESTERDAY THEME
      console.log("only yesterday works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "Porco Rosso") {
      // PORCO ROSSO THEME
      console.log("porco works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "Pom Poko") {
      // POM POKO THEME
      console.log("pom poko works");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "Whisper of the Heart") {
      // WHISPER OF THE HEART THEME
      console.log("whisper works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "Princess Mononoke") {
      // PRINCESS MONONOKE THEME
      console.log("mononoke works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "My Neighbors the Yamadas") {
      // YAMADAS THEME
      console.log("yamadas works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "Spirited Away") {
      // SPIRITED AWAY THEME
      console.log("spirited away works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "The Cat Returns") {
      // THE CAT RETURNS THEME
      console.log("cat works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "Howl's Moving Castle") {
      // HOWLS MOVING CASTLE THEME
      console.log("howl works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if ((event.target.innerHTML = "Tales from Earthsea")) {
      // TALES FROM EARTHSEA THEME
      console.log("tales from earthsea works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "Ponyo") {
      // PONYO THEME
      console.log("Ponyo works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "Arrietty") {
      // ARRIETTY THEME
      console.log("arrietty works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "From Up on Poppy Hill") {
      // POPPY HILLS THEME
      console.log("poppy hills works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "The Wind Rises") {
      // The Wind Rises THEME
      console.log("The Wind Rises works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "The Tale of the Princess Kaguya") {
      // The Tale of the Princess Kaguya THEME
      console.log("The Tale of the Princess Kaguya works!");
      title.textContent = event.target.innerHTMl;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "When Marnie Was There") {
      // When Marnie Was There THEME
      console.log("When Marnie Was There works!");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else if (event.target.innerHTML == "The Red Turtle") {
      // The Red Turtle THEME
      console.log("The Red Turtle works");
      title.textContent = event.target.innerHTML;
      searchbarInput.remove();
      searchBtn.remove();
      suggestionList.remove();
    } else {
      alert("please put in title <3");
    }
  }
  changeTheme();
});
