'use strict';

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const player1TotalScore = document.querySelector('#score--0');
const player1CurrentScore = document.querySelector('#current--0');

console.log(player1TotalScore);
console.log(player1CurrentScore);

const rollDice = function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  player1CurrentScore.textContent = randomNumber;
};

roll.addEventListener('click', rollDice);

hold.addEventListener('click', function () {
  player1TotalScore.textContent =
    Number(player1TotalScore.textContent) +
    Number(player1CurrentScore.textContent);
});
