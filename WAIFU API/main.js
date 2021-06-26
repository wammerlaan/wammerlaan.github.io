const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const body = document.querySelector(".myData");

const button = document.querySelector(".button");
function getQuote() {
  fetch("https://api.waifu.pics/sfw/waifu")
    .then((res) => res.json())
    .then(function getData(data) {
      console.log(data);
      body.style.backgroundImage = `url(${data.url})`;
    });
}
button.addEventListener("click", getQuote);
