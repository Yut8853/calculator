const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const clearBtn = document.getElementById('btn-clear');
const userInput = document.getElementById('input-number');

const currentProcess = document.getElementById("current-calculation");
const currentResultOutput = document.getElementById("current-result");

function outputResult(result, process) {
    currentProcess.innerHTML = process ?? '';
    currentResultOutput.innerHTML = result;
}

let result = 0;
let log = [];

const addNumbers = () => {
    calculate('ADD');
}

const subtractNumbers = () => {
    calculate('SUBTRACT');
}

const multiplyNumbers = () => {
    calculate('MULTIPLY');
}

const divideNumbers = () => {
    calculate('DIVIDE');
}

const calculate = (operationType) => {
    const enteredNumber = parseInt(userInput.value);
    const prevResult = result;
    switch(operationType) {
        case 'ADD':
            result += enteredNumber;
            break;
        case 'SUBTRACT':
            result -= enteredNumber;
            break;
        case 'MULTIPLY':
            result *= enteredNumber;
            break;
        case 'DIVIDE':
            result /= enteredNumber;
            break;
    }

    const newLog = {
        type: operationType,
        number: enteredNumber,
    };
    log.push(newLog);
    outputResult(result, `${prevResult} ${getOperatorSymbol(operationType)} ${enteredNumber} = ${result}`);
    console.log('current logs:', log);
}

const getOperatorSymbol = (type) => {
    switch(type) {
        case 'ADD':
            return '+';
        case 'SUBTRACT':
            return '-';
        case 'MULTIPLY':
            return '*';
        case 'DIVIDE':
            return '/';
    }
    return '';
}

const clear = () => {
    result = 0;
    log.splice(0);
    outputResult(result, '');
    console.log('log', log);
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtractNumbers);
multiplyBtn.addEventListener('click', multiplyNumbers);
divideBtn.addEventListener('click', divideNumbers);
clearBtn.addEventListener('click', clear);