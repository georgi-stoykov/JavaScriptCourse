const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  let selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();

  if (selection !== ROCK && selection != PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    selection = DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  let pick;
  if (randomValue < 0.34) {
    pick = ROCK;
  } else if (randomValue < 0.67) {
    pick = PAPER;
  } else {
    pick = SCISSORS;
  }
  console.log(`Computer picks ${pick}`);
  return pick;
};

const getWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return RESULT_DRAW;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting ...');
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerSelection, computerChoice);
  console.log(winner);
  gameIsRunning = false;
});

// not related to game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation == 'ADD') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

const sumEverything = (...numbers) => {
  // like args[] in C#
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

const subtractEverything = function () {
  let sum = 0;
  for (const num of arguments) {
    // "arguments" is a global implicit variable that works only with the full "function()" declaration
    sum += num;
  }
  return sum;
};

const showResult = (messageText, result) => console.log(messageText + ' ' + result);

combine(showResult.bind(this, 'Adding result'), 'ADD', (1, 45, 2, 39, 5, 8, -3, 23));
combine(showResult.bind(this, 'Subtracting result'), 'SUBTRACT', (3, 32, -15, 4));
