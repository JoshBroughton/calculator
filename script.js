function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function operate(operator, x, y) {
    if (operator === "+") {
        return add(x, y);
    } else if (operator === "-") {
        return subtract(x, y);
    } else if (operator === "X") {
        return multiply(x, y);
    } else if (operator === "/") {
        return divide(x, y);
    }
}
//TODO: Add event listeners that append the pressed number to the display number
//and keep this number saved
//Add event listeners to operators that cause operators to dipslay on press and
//save the operator in a variable
//event listener for = that causes that executes operate with these variables
//also cause operate to execute if one of the other operators is clicked instead
//of equals
let displayNum = "";
var x;
var y;
function numberButtons() {
    let elements = document.getElementsByClassName("button number");
    for (i=0;i<elements.length;i++) {
        thisElement = elements[i];
        thisElement.addEventListener("click", function() {
            displayNum += this.textContent;
            updateDisplay(displayNum);
        }) 
    }
} 
//adds event listeners to number buttons and concatenates them to string of numbers
//displayed in display
function updateDisplay(newText) {
    let display = document.querySelector(".calc-display");
    display.innerText = newText;
}
numberButtons();    