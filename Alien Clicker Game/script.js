'use strict';

const alien = document.querySelector('.alien');
const scoreEl = document.querySelector('#score');
const livesEl = document.querySelector('#lives');

const gameW = document.querySelector('.game').clientWidth;
const gameH = document.querySelector('.game').clientHeight;

const alienW = document.querySelector('.alien').clientWidth;
const alienH = document.querySelector('.alien').clientHeight;

console.log(gameH, gameW, alienW, alienH);

let score = 0;
const maxTop = gameH - alienH;
const maxLeft = gameW - alienW;

alien.addEventListener('click', function () {
  let randomTop = Math.trunc(Math.random() * maxTop);
  let randomLeft = Math.trunc(Math.random() * maxLeft);

  score = score + 1;
  scoreEl.textContent = score;
  alien.classList.add('hidden');

  alien.style.top = randomTop + 'px';
  alien.style.left = randomLeft + 'px';

  setTimeout(() => {
    alien.classList.remove('hidden');
  }, 1000);
});
