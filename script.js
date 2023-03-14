const numbers = ['1','2','3','4','5','6','7','8','9','0','.']
const operators = ['+','-','*','/','=','Enter'];
const numButtons = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const screen = document.querySelector('.numberUI')
const button = document.querySelectorAll('.button')
const clear = document.querySelector('.clear');
const sum = document.querySelector('.sum')

let num1 = null;
let num2 = null;
let num3 = null;
let startNewNumber = true;;
let operation = '';
let huj = '';
screen.innerHTML = '0'

function operator(operation, num1, num2) {
switch (operation)
{
    case '+':
        add(num1,num2);
        break;
    case '-':
        subtract(num1,num2);
        break;
    case '*':
        multiply(num1,num2);
        break;
    case '/':
        divide(num1, num2);
        break;
    case '=':
    case 'Enter':
        operation = huj;
        operator(huj,num1,num2);
        console.log('op',operation)
        return operation;
    default: console.log(operation)
}
}
function add(worknum, worknum2) {
    num1 = Number(worknum) + Number(worknum2);
    screen.innerHTML = num1;
    return num1;
}
function subtract(worknum, num2) {
    num1 = Number(worknum) - Number(num2);
    screen.innerHTML = num1;
    return num1;
}
function multiply(worknum,worknum2) {
    num1 = Number(worknum) * Number(worknum2);
    screen.innerHTML = num1;
    return num1, num2;
}
function divide(worknum,num2) {
    num1 = Number(worknum) / Number(num2);
    screen.innerHTML = num1;
    return num1;
}
function clearAll() {
    num1 = null;
    num2 = null;
    screen.innerHTML = '0';
    startNewNumber = true;
}
function delScreen() {
        screen.innerHTML = '';
}



function poga() {
    if (!num1) {
        num1 = screen.innerHTML;
        startNewNumber = true;
    } else if (!num2) {
        num2 = screen.innerHTML;
        num3 = num2;
        startNewNumber = true;
        operator(operation,num1,num2)
    } 
    else {
        num2 = num3;
        startNewNumber = true;
        operator(operation,num1,num2);
        console.log(operation)
    }
};


/*Gets input -keyboard - click*/
window.addEventListener('keydown',checkInput);
button.forEach(button => button.addEventListener('click', checkInput));
clear.addEventListener('click', clearAll)


function checkInput(e) {
    if (startNewNumber == true && screen.innerHTML.length > 0) {
        delScreen();
        startNewNumber = false;
    }
    if (this.innerHTML) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == this.innerHTML) {
                 screen.innerHTML += numbers[i];
                 break;
            }
         else if (operators[i] == this.innerHTML) {
                operation = this.innerHTML;
                poga();
                break;
            }
        }
    } else if (!this.innerText) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == e.key) {
                 screen.innerHTML += numbers[i];
                 break;
            }
         else if (operators[i] == e.key) {
                operation = e.key;
                poga();
                break;
            }
        }
    }
    if (operation !== '=' && operation !== 'Enter') {
        huj = operation;
    }
};


