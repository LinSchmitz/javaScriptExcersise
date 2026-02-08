'use strict';

const message = (document.querySelector('.message').textContent =
  'correct Number ⭐');
const guessNumber = (document.querySelector('.guess').value = 23);
const score = document.querySelector('.score').textContent;
const highScore = document.querySelector('.highscore').textContent;
const result = document.querySelector('.number').textContent;

console.log(message, guessNumber, score, highScore);
