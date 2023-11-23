//                                       CODE - 1
//---------------------------------------------------------------------------------------

// const form = document.querySelector('form');
// let prev_guess_span = document.getElementById('prev-guess');
// let guess_rem_span = document.getElementById('guess-rem');
// let display = document.querySelector('.display');

// let total_guess = 10;
// let prev_guess = [];
// let flag = 0;

// const target = 50;

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   if (flag === 0) {
//     if (total_guess > 0) {
//       const guess_num = parseInt(document.getElementById('input').value);
//       prev_guess.push(guess_num);

//       if (guess_num === target) {
//         flag = 1;
//         display.innerHTML = 'Congratulation! You have found the number';
//       } else {
//         display.innerHTML = `Wrong guess`;
//       }
//       total_guess--;
//     } else {
//       display.innerHTML = `No remaining guess left`;
//     }
//   } else {
//     display.innerHTML = `Already found the target`;
//   }

//   prev_guess_span.innerHTML = `[${prev_guess}]`;
//   guess_rem_span.innerHTML = `${total_guess}`;
// });

//                                  END OF CODE - 1
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

//                                       CODE - 2
//---------------------------------------------------------------------------------------

const input = document.getElementById('input');
const submit = document.getElementById('button');
const prev_guess_span = document.getElementById('prev-guess');
const guess_rem_span = document.getElementById('guess-rem');
const guess_display = document.querySelector('#guess-display');
const display = document.querySelector('#display');
const new_game = document.querySelector('.new-game');

let guesses = [];
let total_guess = 10;
let playGame = true;

function generateRandomNumber() {
  return parseInt(Math.random() * 100 + 1);
}

let target = generateRandomNumber();

if (playGame) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(input.value);
    if (total_guess > 0) {
      validateGuess(guess);
      prev_guess_span.innerHTML = `[${guesses}]`;
      guess_rem_span.innerHTML = total_guess;
    } else {
      displayMsg(`Game Over! Random number is ${target}`);
      endGame();
    }
    // prev_guess_span.innerHTML = `[${guesses}]`;
    // guess_rem_span.innerHTML = total_guess;
  });
}

function validateGuess(guess) {
  if (guess === '' || isNaN(guess) || guess <= 0 || guess > 100) {
    displayMsg('Please enter a valid input between (1 - 100)');
  } else {
    guesses.push(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  total_guess--;
  displayGuess(guess);
  if (guess < target) {
    displayMsg(`Guess is less than target`);
  } else if (guess > target) {
    displayMsg('Guess is greater than target');
  } else {
    displayMsg('Congratulation! You have found the correct number');
    endGame();
  }
}

function displayGuess(guess) {
  guess_display.innerHTML = `Your guess: ${guess}`;
}

function displayMsg(message) {
  display.innerHTML = message;
}

function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  new_game.style.display = 'block';
  playGame = false;
  newGame();
}

function newGame() {
  new_game.addEventListener('click', () => {
    input.removeAttribute('disabled');
    guesses = [];
    total_guess = 10;
    target = generateRandomNumber();
    prev_guess_span.innerHTML = '';
    guess_rem_span.innerHTML = '10';
    guess_display.innerHTML = '';
    displayMsg('');
    new_game.style.display = 'none';
    playGame = true;
  });
}
