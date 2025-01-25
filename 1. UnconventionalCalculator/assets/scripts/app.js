const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calculationResult = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calculationResult);
}

function writeToLog(operation, prevResult, number, newResult) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: number,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();

  if (
    calculateResult !== 'ADD' &&
    calculateResult !== 'SUBTRACT' &&
    calculateResult !== 'MULTIPLE' &&
    calculateResult !== 'DIVIDE' &&
    !enteredNumber
  ) {
    return;
  }

  const initResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initResult, enteredNumber);
  writeToLog(calculationType, initResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
