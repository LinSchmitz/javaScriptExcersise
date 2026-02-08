'use strict';

// const score = document.querySelector('.score').textContent;
// const highScore = document.querySelector('.highscore').textContent;

const secretNumber = (document.querySelector('.number').textContent =
  Math.trunc(Math.random() * 20 + 1));

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);
  console.log('secret number is ' + secretNumber);

  if (!guess) {
    const message = (document.querySelector('.message').textContent =
      '❌ No Number');
    console.log(message);
  }

  secretNumber === guess
    ? console.log('equal')
    : secretNumber > guess
      ? console.log('Too Low')
      : console.log('Too High');

  //   if (secretNumber === guess) {
  //     console.log('equal');
  //   } else if (secretNumber > guess) {
  //     console.log('Too Low');
  //   } else {
  //     console.log('Too High');
  //   }
});
