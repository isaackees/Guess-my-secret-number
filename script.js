'use strict';
// const GenRandomNumber = function () {
//   Math.trunc(Math.random() * 20) + 1;
// };
// let secretNumber = GenRandomNumber();
// let score = 20;
// let Highscore = 0;
// //document.querySelector('.number').textContent = secretNumber;
// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);

//   if (!guess) {
//     displayMessage('no number');
//   } else if (guess === secretNumber) {
//     displayMessage(' correct number');
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if(Highscore > score) {
//       Highscore = score;
//       document.querySelector('.highscore').textContent = Highscore;
//     }
//     // when guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? ' Too High' : 'Too Low');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('you Lost The Game');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
// when guess is high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' Too High';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you Lost The Game';
//       document.querySelector('.score').textContent = 0;
//     }
//when guess is low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you Lost The Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = GenRandomNumber();
//   document.querySelector('.score').textContent = score;
//   displayMessage('start guessing....');
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('.number').textContent = secretNumber;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNUmber;
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guessValue) {
    displayMessage('No Number');
    // when guess is wrong
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guessValue > secretNumber ? 'Too High' : 'Too Low');
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('Game over!! click again to start');
    }
  } else if (guessValue === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30';

    if (highscore > score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('...start Guessing');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15';
  document.querySelector('.number').textContent = '?';
});
