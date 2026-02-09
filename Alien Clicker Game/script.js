'use strict';

const alien = document.querySelector('.alien');
const scoreEl = document.querySelector('#score');
const livesEl = document.querySelector('#lives');

let score = 0;

alien.addEventListener('click', function () {
  score = score + 1;
  scoreEl.textContent = score;
  alien.classList.add('hidden');
});
