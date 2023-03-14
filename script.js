const numbers = ['1','2','3','4','5','6','7','8','9','0','.']
const operators = ['+','-','*','/'];
const numButtons = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const screen = document.querySelector('.numberUI')
const button = document.querySelectorAll('.button')
const clear = document.querySelector('.clear');

function operator(operation, num1, num2) {
switch (operation)
{
    case '+':
        console.log('iet plus');
        add(num1,num2);
        break;
    case '-':
        console.log('iet minus')
        subtract(num1,num2);
    case '*':
        console.log('iet reiz');
        multiply(num1,num2);
    case '/':
        console.log('iet dalit');
        divide(num1, num2);
    default: console.log(operation)
}
}
function add(worknum, num2) {
    num1 = Number(worknum) + Number(num2);
    screen.innerHTML = num1;
    return num1;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1,num2) {
    return num1 * num2;
}
function divide(num1,num2) {
    return num1 / num2;
}

let num1 = null;
let num2 = null;
let thing = false;
let operation = '';

function poga() {
    if (!num1) {
        num1 = screen.innerHTML;
        thing = true;
    } else {
        num2 = screen.innerHTML;
        console.log('num2', num2)
        console.log('num1', num1)
        thing = true;
        operator(operation,num1,num2)
    }
};


/*Gets input -keyboard - click*/
window.addEventListener('keydown',checkInput);
button.forEach(button => button.addEventListener('click', checkInput));
clear.addEventListener('click', clearAll)
function clearAll() {
    num1 = null;
    num2 = null;
    screen.innerHTML = '';
    thing = false;
}
function delScreen() {
        screen.innerHTML = '';
}

function checkInput(e) {
    if (thing == true && screen.innerHTML.length > 0) {
        delScreen();
        thing = false;
    }
    if (this.innerHTML) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == this.innerHTML) {
                 screen.innerHTML += numbers[i];
                 break;
            }
         else if (operators[i] == this.innerHTML) {
                operation = this.innerHTML;
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
                console.log(e.key) ;
                break;
            }
    }
 }
};


