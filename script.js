function add(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    return (x + y);
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
    } else if (operator === "*") {
        return multiply(x, y);
    } else if (operator === "/") {
        return divide(x, y);
    }
}
//TODO: fix bug when a digit is clicked when a result is displaying
//TODO: fix bug where operators all break after a string of operations - 
//probably related to variable types?
let displayNum = "";
let operator = "";
let previousResult = "";
let x = "";
let y = "";
function numberButtons() {
    let elements = document.getElementsByClassName("button number");
    for (let i=0;i<elements.length;i++) {
        elements[i].addEventListener("click", function() {
            if (displayNum.length < 8) {
                displayNum += this.textContent;
                updateDisplay(displayNum);
            } 
        }) 
    }
} 
//adds event listeners to number buttons and concatenates them to string of numbers
//displayed in display
function updateDisplay(newText) {
    let display = document.querySelector(".calc-display");
    if (newText.length < 8) {
        display.innerText = newText;
    } else {
        display.innerText = "Overflow";
    }
}
//takes an argument and updates the calclator display with the argument
function operatorClick() {
    let elements = document.getElementsByClassName("button operator");
    for (let i=0;i<elements.length;i++) {
        elements[i].addEventListener("click", function() {
            updateDisplay(this.textContent);
            if (operator === "") {
                if (this.id === "divide") {
                    operator = "/";
                } else if (this.id === "multiply") {
                    operator = "*";
                } else if (this.id === "subtract") {
                    operator = "-";
                } else if (this.id === "add") {
                    operator = "+";
                }
                if (x === "" && y === "" && previousResult === "") {
                    x = displayNum;
                    displayNum = "";
                } else if (x != "" && y === "") {
                    y = displayNum;
                    x = operate(operator, x, y);
                    y = "";
                    displayNum = "";
                    updateDisplay(x.toString());
                } else if (x === "" && y === "" && previousResult != "") {
                    x = previousResult;
                    displayNum = "";
                } else if (x != "" && y === "" && previousResult != "") {
                    y = displayNum;
                    x = operate(operator, x, y);
                    y = "";
                    displayNum = "";
                    updateDisplay(x.toString());
                }
            } else {
                if (x === "" && y === "" && previousResult === "") {
                    x = displayNum;
                    displayNum = "";
                } else if (x != "" && y === "") {
                    y = displayNum;
                    x = operate(operator, x, y);
                    y = "";
                    displayNum = "";
                    updateDisplay(x.toString());
                } else if (x === "" && y === "" && previousResult != "") {
                    x = previousResult;
                    displayNum = "";
                } else if (x != "" && y === "" && previousResult != "") {
                    y = displayNum;
                    x = operate(operator, x, y);
                    y = "";
                    displayNum = "";
                    updateDisplay(x.toString());
                }
                if (this.id === "divide") {
                    operator = "/";
                } else if (this.id === "multiply") {
                    operator = "*";
                } else if (this.id === "subtract") {
                    operator = "-";
                } else if (this.id === "add") {
                    operator = "+";
                }
            }
        })
    }
}
//adds event listeners to operators other than equals that update display with
//the operator and save the id for the operator that previously made operate
//function will recognize

function deleteChar() {
    displayNum = displayNum.slice(0, -1);
    updateDisplay(displayNum);
}
//deletes the last character from the displayNum
function deleteClick() {
    document.getElementById("delete").addEventListener("click", function() {
        displayNum = displayNum.slice(0, -1);
        updateDisplay(displayNum);
    })
}
//deletes most recent digit from displayNum and updates display
function evaluate() {
    document.getElementById("equals").addEventListener("click", function() {
        if (x != "" && y === "") {
            y = displayNum;
            previousResult = operate(operator, x, y);
            y = "";
            x = "";
            displayNum = "";
            updateDisplay(previousResult.toString());
        }
    })
}
function clear() {
    displayNum = "";
    operator = "";
    previousResult = "";
    x = "";
    y = "";
    updateDisplay(displayNum);
}
function clearButton() {
    document.getElementById("clear").addEventListener("click", function() {
    displayNum = "";
    operator = "";
    previousResult = "";
    x = "";
    y = "";
    updateDisplay(displayNum);
    });
}
numberButtons();    
operatorClick();
deleteClick();
evaluate();
clearButton();