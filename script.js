"use strict";

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
const buttonNewGame = document.querySelector(".btn--new");

let currentScore = 0;
let activePlayer = 0;

buttonRoll.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.setAttribute("src", `dice-${dice}.png`);

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});

buttonHold.addEventListener("click", function () {
  if (activePlayer === 0) {
    let total = Number(score0El.textContent) + currentScore;
    if (total > 100) {
      player0El.classList.add("player--winner");
    }
    score0El.textContent = total;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    activePlayer = 1;
  } else {
    let total = Number(score0El.textContent) + currentScore;
    if (total > 100) {
      player1El.classList.add("player--winner");
    }
    score1El.textContent = total;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = 0;
  }
});

buttonNewGame.addEventListener("click", function () {
  player1El.classList.remove("player--active", "player--winner");
  player0El.classList.add("player--active");
  player0El.classList.remove("player--winner");
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
});
