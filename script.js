let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
    if (currentInput === "0" && number !== ".") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput.length === 0 || "+-*/".includes(currentInput.slice(-1))) return;
    currentInput += operator;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch {
        currentInput = "Error";
        updateDisplay();
        setTimeout(clearDisplay, 1500);
    }
}

function updateDisplay() {
    display.textContent = currentInput || "0";
}
