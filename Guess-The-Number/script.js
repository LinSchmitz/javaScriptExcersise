'use strict';

// const score = (document.querySelector('.score').textContent = 20);
// const highScore = document.querySelector('.highscore').textContent;
let score = 20;

const secretNumber = (document.querySelector('.number').textContent =
  Math.trunc(Math.random() * 20) + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   console.log(guess);
  //   console.log('secret number is ' + secretNumber);

  if (!guess || guess < 0) {
    const message = (document.querySelector('.message').textContent =
      '❌ No Number');
    console.log(message);
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = '✔️ Correct Number';
  } else if (secretNumber > guess) {
    document.querySelector('.message').textContent = '🔻 Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '🔺 Too High';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
