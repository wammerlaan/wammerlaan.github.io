import Player from "./Player.js";

/**
 * To start:
 * Check index.html, make sure the board with fields are created with correct classnames
 * The board should be 3x3 fields
 * Add correct classes
 */

const players = [];
let currentPlayer = 0; // This is the index of the array of the currentplayer
const fields = document.querySelectorAll(".board > .field");
const resetButton = document.querySelector(".reset-btn");
//Create two players aligned with the Player class
const playerOne = new Player("player One", "X");
const playerTwo = new Player("player Two", "O");
//Add both players to the players array
players.push(playerOne);
players.push(playerTwo);

/**
 * Assignment
 * Make a loop thru all the fields and add a click event.
 * Connect the addSymbolToField function in the eventHandler
 */
console.log(fields);

for (let i = 0; i < fields.length; i++) {
  const field = fields[i];
  field.addEventListener("click", function () {
    addSymbolToField(field);
    checkWinner();
  });
}

/**
 * Assignment
 * Give body to the reset function (the function exists below)
 */
resetButton.addEventListener("click", resetGame);

function addSymbolToField(field) {
  const fieldContent = field.textContent;
  if (fieldContent === "X" || fieldContent === "O") {
    alert("This field can not be used");
  } else {
    field.textContent = players[currentPlayer].symbol;
    currentPlayer++;

    if (currentPlayer > players.length - 1) {
      field.textcontent = currentPlayer = 0;
    }
  }
  console.log(players);
  /**
   * Assignment
   * Add the current player symbol to the field textContent
   * What more needs to be done here? Make a short todolist
   */
}

function checkWinner() {
  let xCounter = 0; // counts number of X's in a row
  let oCounter = 0; // counts number of O's in a row
  const winlines = [
    [0, 1, 2], //winlines[0]      BOARD
    [3, 4, 5], //winlines[1]      0 1 2
    [6, 7, 8], //winlines[2]      3 4 5
    [0, 4, 8], //winlines[3]      6 7 8
    [2, 4, 6], //winlines[4]
    [0, 3, 6], //winlines[5]
    [1, 4, 7], //winlines[6]
    [2, 5, 8], //winlines[7]
  ];
  /**
   * Assignment
   * Add an algorithm to check if someone has three in a row
   * Try to use Internet - if not found the teacher will give you one
   * Also make sure you check for a draw (gelijkspel)
   * Again what more needs to be done, make a short todolist
   */

  //WINLINE1 CODE
  for (let j = 0; j < winlines.length; j++) {
    const winline = winlines[j];
    xCounter = 0;
    oCounter = 0;
    for (let i = 0; i < winline.length; i++) {
      if (fields[winline[i]].textContent === "X") {
        xCounter++;
        console.log("row 1, x counter " + xCounter);
      } else if (fields[winline[i]].textContent === "O") {
        oCounter++;
        console.log("row 1, o counter " + oCounter);
      }
    }

    // checks counters
    if (xCounter == 3) {
      alert(playerOne.name + " has won the match");
    } else if (oCounter == 3) {
      alert(playerTwo.name + " has won the match");
    }
  }
}

function resetGame() {
  /**
   * Assignment
   * Make sure this works (all fields empty, reset data if needed)
   */

  // players.pop();
  // players.pop();
  fields.innerHTML = "";
  alert("board has been reset.");
  location.reload();
}

console.log("File loaded");
