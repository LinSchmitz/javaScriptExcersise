'use strict';

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const player0TotalScore = document.querySelector('#score--0');
const player0CurrentScore = document.querySelector('#current--0');

const player1TotalScore = document.querySelector('#score--1');
const player1CurrentScore = document.querySelector('#current--1');

const diceImage = document.querySelector('.dice');

// 👉 REAL game data (state)
let diceImg;

let currentScore = 0;

let p0TotalScore = 0;
let p1TotalScore = 0;

let activePlayer = 0;
// player0.classList.contains('player--active') ? '0' : '1';
console.log(activePlayer);
// Set total score to 0 at the beginning
player0TotalScore.textContent = p0TotalScore;
player1TotalScore.textContent = p1TotalScore;

diceImage.classList.add('hidden');

const rollDice = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(activePlayer);

  //dice image display
  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${dice}.png`;

  //check for rolled 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
};

//Roll the Dice
roll.addEventListener('click', rollDice);

// hold the game
hold.addEventListener('click', function () {});
