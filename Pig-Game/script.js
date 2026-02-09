'use strict';

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const player1TotalScore = document.querySelector('#score--0');
const player1CurrentScore = document.querySelector('#current--0');

// 👉 REAL game data (state)
let currentScore = 0;
let totalScore = 0;

// Set total score to 0 at the beginning
player1TotalScore.textContent = totalScore;

const rollDice = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  currentScore = dice;
  player1CurrentScore.textContent = currentScore;
};

roll.addEventListener('click', rollDice);

hold.addEventListener('click', function () {
  totalScore += currentScore;

  // Update DOM
  player1TotalScore.textContent = totalScore;

  // Reset current score
  currentScore = 0;
  player1CurrentScore.textContent = 0;
});
