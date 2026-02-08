'use strict';

const body = document.querySelector('body');
const bgColor = body.style.backgroundColor;

// const highScore = document.querySelector('.highscore').textContent;
let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   console.log(guess);
  //   console.log('secret number is ' + secretNumber);

  if (!guess || guess < 0) {
    const message = (document.querySelector('.message').textContent =
      '❌ No Number');
    console.log(message);
  } else if (secretNumber === guess) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '✔️ Correct Number';
    body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔻 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔺 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.number').style.width = '15rem';
  body.style.backgroundColor = '#434141';
  document.querySelector('.guess').value = null;
});
