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
    console.log(this.innerText);
}
const keys = ['1','2','3','4','5','6','7','8','9','0','/','*','-','+','Enter','.',',']
const buttons = document.querySelectorAll('.button');

function check (e) {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] == e.key) console.log(e.key);
    }
};
window.addEventListener('keydown',check);

buttons.forEach(button => button.addEventListener('click', getInput));