const numbers = ['1','2','3','4','5','6','7','8','9','0','.']
const operators = ['+','-','*','/'];
const numButtons = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const screen = document.querySelector('.numberUI')
const button = document.querySelectorAll('.button')

function operator(fun, num1, num2) {

}
function add(num1, num2) {
    return num1 + num2;
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
function getInput() {
    screen.innerHTML += this.innerText;
}


/*Gets input -keyboard - click*/
window.addEventListener('keydown',checkInput);
button.forEach(button => button.addEventListener('click', checkInput));

function checkInput(e) {
    if (this.innerHTML) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == this.innerHTML) {
                 screen.innerHTML += numbers[i];
                 break;
            }
         else if (operators[i] == this.innerHTML) {
                console.log(this.innerHTML) ;
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



