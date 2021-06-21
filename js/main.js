import { getAllFilms } from "./StudioGhibli.js";

const darkModeBtn = document.querySelector(`#themeSwitch`);
const BMIcalc = document.querySelector(`#calc`);
const heightInpt = document.querySelector(`.heightInpt`);
const weightInpt = document.querySelector(`.weightInpt`);

const darkTheme = function (event) {
  console.log(`buttonClick check`);
  const menu = document.querySelector(`.menu-rose`);
  menu.classList.toggle("menu-dark");

  //   const menuBtn = document.querySelector(`.menuBtn-rose`);
  //   menuBtn.classList.toggle("menuBtn-dark");

  let bodySwag = document.querySelector(`.bodySwag-rose`);
  bodySwag.classList.toggle("bodySwag-dark");

  const footer = document.querySelector(`.footer-rose`);
  footer.classList.toggle("footer-dark");

  const title = document.querySelector(`.titlep1-rose`);
  title.classList.toggle("titlep1-dark");

  if (darkModeBtn.textContent == `DarkMode`) {
    darkModeBtn.textContent = `LightMode`;
  } else {
    darkModeBtn.textContent = `DarkMode`;
  }
  console.log(bodySwag);
};

darkModeBtn.addEventListener("click", darkTheme);

// BMIcalc.addEventListener("click", function (event) {
//   console.log(heightInpt.value);
//   console.log(weightInpt.value);
//   let heightanswer = heightInpt.value;
//   let weightanswer = weightInpt.value;
//   let BMIanswer = (heightanswer * weightanswer) / 703;
//   console.log(BMIanswer);
//   let BMImessage = ``;
//   if (BMIanswer > 40 && BMIanswer < 65) {
//     BMImessage = `Your BMI is ` + BMIanswer + ` and that is extremely obese.`;
//   } else if (BMIanswer > 30 && BMIanswer < 40) {
//     BMImessage = `Your BMI is ` + BMIanswer + ` and that is obese.`;
//   } else if (BMIanswer > 25 && BMIanswer < 30) {
//     BMImessage = `Your BMI is ` + BMIanswer + ` and that is overweight.`;
//   } else if (BMIanswer > 18 && BMIanswer < 25) {
//     BMImessage = `Your BMI is ` + BMIanswer + ` and that is good!`;
//   } else if (BMIanswer < 18) {
//     BMImessage = `Your BMI is ` + BMIanswer + ` and this is underweight.`;
//   } else {
//     BMImessage = `Please put in normal numbers`;
//   }
//   const showAnswer = document.querySelector(`.answer`);
//   showAnswer.textContent = BMImessage;
// });
async function main() {
  const allFilms = await getAllFilms();
  console.log(allFilms);
}
main();
