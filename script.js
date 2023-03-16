const numbers = ['1','2','3','4','5','6','7','8','9','0','.']
const operators = ['+','-','*','/','÷'];
const equals =['=','Enter'];
const numButtons = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const screen = document.querySelector('.numberUI')
const button = document.querySelectorAll('.button')
const clearAllMemory = document.querySelector('.clearAll');
const clear = document.querySelector('.clear');
const plusMinusBtn = document.querySelector('.plusMinus');
const percentBtn = document.querySelector('.percent');

let num1 = null;
let num2 = null;
let tempNum = null;
let resultDisplayed = false;
let startNewNumber = true;
let operation = '';
let previousOperator = '';
screen.innerHTML = '0'

/* Works the actual calculation */
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
        if (!num2) {
            screen.innerHTML = num1;
            return;
        }
        multiply(num1,num2);
        break;
    case '/':
    case '÷':
        if (!num2) {
            screen.innerHTML = num1;
            return;
        }
        divide(num1, num2);
        break;
    case '=':
    case 'Enter':
        operation = previousOperator;
        operator(previousOperator,num1,num2);
    default: console.log(operation)
}

}
function add(worknum, worknum2) {
    num1 = Number(worknum) + Number(worknum2);
    screen.innerHTML = Math.round(num1 * 100) / 100;
    num1 = Math.round(num1 * 100) / 100;
}
function subtract(worknum, num2) {
    num1 = Number(worknum) - Number(num2);
    screen.innerHTML = Math.round(num1 * 100) / 100;
    num1 = Math.round(num1 * 100) / 100;
}
function multiply(worknum,worknum2) {
    num1 = Number(worknum) * Number(worknum2);
    screen.innerHTML = Math.round(num1 * 100) / 100;
    num1 = Math.round(num1 * 100) / 100;

}
function divide(worknum,num2) {
    num1 = Number(worknum) / Number(num2);
    screen.innerHTML = Math.round(num1 * 100) / 100;
    num1 = Math.round(num1 * 100) / 100;
}
function clearAll() {
    num1 = null;
    num2 = null;
    tempNum = null;
    screen.innerHTML = '0';
    startNewNumber = true;
    resultDisplayed = false;
    previousOperator = '';
    operation = '';
}
function delScreen() {
        screen.innerHTML = '';
        
}
function changeSign() {
    if (screen.innerHTML > 0) {
        if (screen.innerHTML.includes('-')) return;
            screen.innerHTML =  '-' + screen.innerHTML;
            num1 = '-' + Number(num1);
    } else if (screen.innerHTML < 0) {
        if (screen.innerHTML.charAt(0) === '-') {
            screen.innerHTML = screen.innerHTML.substring(1);
            num1 = screen.innerHTML;
        }
    }
};
function percentFun() {
    screen.innerHTML = screen.innerHTML / 100;
            num1 = Number(num1);
}

/* Evaluates the rules for operator before passing them along to the operator function */
function poga() {
    if (resultDisplayed == true ) {
        screen.innerHTML = num1;
        resultDisplayed = false;
        startNewNumber = true;
        num2 = null;
        return;
    } 
   
    if (!num1) {
        num1 = screen.innerHTML;
        startNewNumber = true;
    } else if (!num2 && !previousOperator) {
        
        num2 = screen.innerHTML;
        tempNum = num2
        startNewNumber = true;
        operator(operation,num1,num2)
         
    } else if (operation != previousOperator) {
            startNewNumber = true;
            num2 = screen.innerHTML;
            tempNum = num2;
            operator(previousOperator,num1,num2)
            return;
            
    } else {
        num2 = screen.innerHTML;
        startNewNumber = true;
        operator(operation,num1,num2);
        num2 = tempNum;
        
    }
};
/* Function is ewoked when input gets '=' evaluates logic before starting the operator */
function sum() {
    if (resultDisplayed == false) {
        num2 = screen.innerHTML;
    } 
  
    operator(operation,num1,num2);
    resultDisplayed = true;
};


/*Gets input -keyboard - click*/
window.addEventListener('keydown',checkInput);
button.forEach(button => button.addEventListener('click', checkInput));
clearAllMemory.addEventListener('click', clearAll)
clear.addEventListener('click', delScreen);
plusMinusBtn.addEventListener('click', changeSign);
percentBtn.addEventListener('click', percentFun)


function checkInput(e) {

    if (startNewNumber == true) {
        tempNum = num2;
        delScreen();
        startNewNumber = false;
    }
    if (this.innerHTML) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == this.innerHTML) {
                if (screen.innerHTML.length > 9) return;
                if (screen.innerHTML.includes('.') && this.innerHTML == '.') return;
                 screen.innerHTML += numbers[i];
                 break;
            } else if (operators[i] == this.innerHTML) {
                operation = this.innerHTML;
                poga();
                break;
            } else if (equals[i] == this.innerHTML) {
                operation = this.innerHTML
                sum();
                break;
            }
        
        }
    } else if (!this.innerText) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == e.key) {
                if (screen.innerHTML.length > 9) return;
                if (screen.innerHTML.includes('.') && e.key == '.') return;
                 screen.innerHTML += numbers[i];
                 break;
            } else if (operators[i] == e.key) {
                operation = e.key;
                poga();
                break;
            } else if (equals[i] == e.key) {
                operation = e.key
                sum();
                break;
            }
        }
    }
    if (operation !== '=' && operation !== 'Enter') {
        previousOperator = operation;
    }
    if (previousOperator == '/' && num2 == 0) 
    {
        clearAll()
        return screen.innerHTML = "Don't do this!";
        
    }
};


