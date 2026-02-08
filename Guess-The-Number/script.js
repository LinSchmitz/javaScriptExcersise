'use strict';

// const message = (document.querySelector('.message').textContent =
//   'correct Number ⭐');
// const guess = (document.querySelector('.guess').value = 23);
// const score = document.querySelector('.score').textContent;
// const highScore = document.querySelector('.highscore').textContent;
// const result = document.querySelector('.number').textContent;

// console.log(message, guess, score, highScore);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (!guess) {
    const message = (document.querySelector('.message').textContent =
      '❌ No Number');
    console.log(message);
  }
});
