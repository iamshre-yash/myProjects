'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function(score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function(number) {
  document.querySelector('.number').textContent = number;
};
const changeColor = function(color) {
  document.querySelector('body').style.backgroundColor = color;
};
const changeWidth = function(width) {
  document.querySelector('.number').style.width = width;
}; //--Game Logic Start--
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    changeColor('#60b347');
    changeWidth('30rem');
    if (score > highscore) { //New highscore
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
      changeColor('#FF0000');
      changeWidth('30rem');
    }
  }
}); // --Game Logic End--
document.querySelector('.again').addEventListener('click', function() {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  changeColor('#222');
  changeWidth('15rem');
});
