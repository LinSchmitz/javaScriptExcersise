'use strict';

const body = document.querySelector('body');
const bgColor = body.style.backgroundColor;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || guess < 0) {
    displayMessage('❌ No Number');
  } else if (secretNumber === guess) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('✔️ Correct Number');
    body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //highscore
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
  //when gues is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔺 Too High' : '🔻 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('again');
  score = 20;
  //   secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  body.style.backgroundColor = '#434141';
});
