'use strict';

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const player0CurrentScore = document.querySelector('#current--0');
const player1CurrentScore = document.querySelector('#current--1');

const diceImage = document.querySelector('.dice');

// 👉 REAL game data (state)
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  player0CurrentScore.textContent = 0;
  player1CurrentScore.textContent = 0;

  diceImage.classList.add('hidden');

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const rollDice = function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //dice image display
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${dice}.png`;

    //check for rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
};

//Roll the Dice
roll.addEventListener('click', rollDice);

// hold the game
hold.addEventListener('click', function () {
  console.log(playing);
  if (playing) {
    // Add current score to active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if player's score >= 100
    if (scores[activePlayer] >= 10) {
      //finish the game
      playing = false;
      diceImage.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', init);
