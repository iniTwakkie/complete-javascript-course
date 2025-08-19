'use strict';

// selecting Elements in HTML
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0'); // these are selecting the class
const player1El = document.querySelector('.player--1'); // selecting the class
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //this sets prior players score to 0
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); // it will add the class if its not there, else it will remove it.
  player1El.classList.toggle('player--active'); // it will add the class if its not there, else it will remove it.
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // start generating random dice roll
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    console.log(diceNumber);

    //  then display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;

    // check if roll was 1, then we need to switch to next player.
    if (diceNumber !== 1) {
      // then add the value to your score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // prior player defaults
      switchPlayer();
      // if the dice number is 1, then current score 0 and move to next player.
    }
  }
});

// // Resetting values to null
// const resetGame = function () {
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   diceEl.classList.add('hidden');
//   activePlayer = 0;
//   player0Total = 0;
//   totalScore0El.textContent = 0;
//   player1Total = 0;
//   totalScore1El.textContent = 0;
//   // player1.classList.remove('player--active');
// };

// // roll the dice
// btnRoll.addEventListener('click', function () {
//   const randomValue = Math.floor(Math.random() * 6 + 1); // has to be here as it only runs once if left at the top and not inside the function
//   if (activePlayer === 0) {
//     score0El.textContent = randomValue;

//     if (randomValue === 1) {
//       resetMoveToNextPlayer();
//       player0Total = 0;
//       totalScore0El.textContent = 0;
//     }
//   } else {
//     score1El.textContent = randomValue;
//     if (randomValue === 1) {
//       resetMoveToNextPlayer();
//       player1Total = 0;
//       totalScore1El.textContent = 0;
//     }
//   }
//   // Show the dice
//   diceEl.classList.remove('hidden');

//   diceEl.src = `dice-${randomValue}.png`;
// });

// const sumPlayerTotal = function () {
//   if (activePlayer === 0) {
//     player0Total += Number(score0El.textContent);
//     // player0Total.push(Number(score0El.textContent));
//     totalScore0El.textContent = player0Total;
//     console.log(activePlayer, player0Total, totalScore0El);
//   } else {
//     player1Total += Number(score1El.textContent);
//     // player1Total.push(Number(score1El.textContent));
//     totalScore1El.textContent = player1Total;
//     console.log(activePlayer, player1Total, totalScore1El);
//   }
// };

btnHold.addEventListener('click', function () {
  if (playing) {
    // add the current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player score is more than max value,
    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');

      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
