'use strict';

const alien = document.querySelector('.alien');
const scoreEl = document.querySelector('#score');
const livesEl = document.querySelector('#lives');
const btnNewGame = document.querySelector('.new-game');

const gameW = document.querySelector('.game').clientWidth;
const gameH = document.querySelector('.game').clientHeight;

const alienW = document.querySelector('.alien').clientWidth;
const alienH = document.querySelector('.alien').clientHeight;

console.log(gameH, gameW, alienW, alienH);

const maxTop = gameH - alienH;
const maxLeft = gameW - alienW;

let score = 0;
let alienInterval;

const init = function () {
  // Reset score
  score = 0;
  scoreEl.textContent = score;

  // Make alien visible
  alien.classList.remove('hidden');

  // Clear previous interval if it exists
  if (alienInterval) clearInterval(alienInterval);

  // Start moving alien every 2 seconds
  alienInterval = setInterval(() => {
    let randomTop = Math.trunc(Math.random() * maxTop);
    let randomLeft = Math.trunc(Math.random() * maxLeft);

    alien.style.top = randomTop + 'px';
    alien.style.left = randomLeft + 'px';
    alien.classList.remove('hidden');
  }, 2000);
};

init();

alien.addEventListener('click', function () {
  score = score + 1;
  scoreEl.textContent = score;
  alien.classList.add('hidden');
});

btnNewGame.addEventListener('click', init);
