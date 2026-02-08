'use strict';

// DOM elements
const body = document.querySelector('body');
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// Game state
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  messageEl.textContent = message;
};

// Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // Invalid input
  if (!guess || guess < 1 || guess > 20) {
    displayMessage('❌ No Number');

    // Correct guess
  } else if (guess === secretNumber) {
    numberEl.textContent = secretNumber;
    displayMessage('✔️ Correct Number');
    body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }

    // Wrong guess
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔺 Too High' : '🔻 Too Low');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      scoreEl.textContent = 0;
    }
  }
});

// Again button
againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  guessEl.value = '';
  numberEl.style.width = '15rem';
  body.style.backgroundColor = '#434141';
});
