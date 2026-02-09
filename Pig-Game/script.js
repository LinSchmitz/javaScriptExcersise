'use strict';

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const player1TotalScore = document.querySelector('#score--0');
const player1CurrentScore = document.querySelector('#current--0');

const player2TotalScore = document.querySelector('#score--1');
const player2CurrentScore = document.querySelector('#current--1');

const diceImage = document.querySelector('.dice');

// 👉 REAL game data (state)
let diceImg;

let p1CurrentScore = 0;
let p1TotalScore = 0;

let p2CurrentScore = 0;
let p2TotalScore = 0;

// Set total score to 0 at the beginning
player1TotalScore.textContent = p1TotalScore;
player2TotalScore.textContent = p2TotalScore;

diceImage.classList.add('hidden');

const rollDice = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  p1CurrentScore = dice;
  player1CurrentScore.textContent = p1CurrentScore;

  //dice image
};

//Roll the Dice
roll.addEventListener('click', rollDice);

// hold the game
hold.addEventListener('click', function () {
  p1TotalScore += p1CurrentScore;
  // Update DOM
  player1TotalScore.textContent = p1TotalScore;
  // Reset current score
  p1CurrentScore = 0;
  player1CurrentScore.textContent = 0;
  //switch player
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }
});
