const numbers = ['1','2','3','4','5','6','7','8','9','0','.']
const operators = ['+','-','*','/',];
const equals =['=','Enter'];
const numButtons = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const screen = document.querySelector('.numberUI')
const button = document.querySelectorAll('.button')
const clearAllMemory = document.querySelector('.clearAll');
const clear = document.querySelector('.clear');

let num1 = null;
let num2 = null;
let num3 = null;
let idkYet = false;
let startNewNumber = true;
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
    num3 = null;
    screen.innerHTML = '0';
    startNewNumber = true;
    idkYet = false;
    huj = '';
    operation = '';
}
function delScreen() {
        screen.innerHTML = '';
        
}



function poga() {
    console.log('pog op', operation)
    console.log('pog huj',huj)
    if (idkYet == true ) {
        screen.innerHTML = num1;
        idkYet = false;
        startNewNumber = true;
        num2 = null;
        return;
    } 
   
    if (!num1) {
        num1 = screen.innerHTML;
        startNewNumber = true;
    } else if (!num2) {
        num2 = screen.innerHTML;
        num3 = num2
        startNewNumber = true;
        operator(operation,num1,num2)
    } 
    else {
        num2 = screen.innerHTML;
        console.log('suka')
        startNewNumber = true;
        operator(operation,num1,num2);
        num2 = num3;
        
    }
};
function sum() {
    console.log('sum op', operation)
    console.log('sum huj',huj)
    if (idkYet == false) {
        num2 = screen.innerHTML;
    }
    operator(operation,num1,num2);
    idkYet = true;
};


/*Gets input -keyboard - click*/
window.addEventListener('keydown',checkInput);
button.forEach(button => button.addEventListener('click', checkInput));
clearAllMemory.addEventListener('click', clearAll)
clear.addEventListener('click', delScreen);


function checkInput(e) {
    console.log('clear',startNewNumber);
    console.log('num',idkYet);

    if (startNewNumber == true) {
        delScreen();
        startNewNumber = false;
    }
    if (this.innerHTML) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == this.innerHTML) {
                if (screen.innerHTML.length > 9) return;
                 screen.innerHTML += numbers[i];
                 break;
            } else if (operators[i] == this.innerHTML) {
                operation = this.innerHTML;
                poga();
                break;
            } else if (equals[i] == this.innerHTML) {
                operation = this.innerHTML
                sum();
            }
        
        }
    } else if (!this.innerText) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == e.key) {
                if (screen.innerHTML.length > 9) return;
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


