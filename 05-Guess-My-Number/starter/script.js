'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   When no Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number select!!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You WON!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;

      //   if score is lower than highscore
    } else if (score < highScore) {
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too HIGH';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too LOW
  } else if (guess < secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too LOW!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// Adding the again button logic
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector('.guess').value = '';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// console.log(document.querySelector('.check'));

// console.log(typeof secretNumber);
let hs = document.querySelector('.highscore').value;
console.log(typeof hs, hs);
