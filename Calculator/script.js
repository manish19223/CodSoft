document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;
    let secondOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = null;
                secondOperand = null;
                display.textContent = '';
            } else if (value === '=') {
                secondOperand = parseFloat(currentInput);
                if (operator && firstOperand !== null && secondOperand !== null) {
                    let result;
                    switch (operator) {
                        case '+':
                            result = firstOperand + secondOperand;
                            break;
                        case '-':
                            result = firstOperand - secondOperand;
                            break;
                        case '*':
                            result = firstOperand * secondOperand;
                            break;
                        case '/':
                            result = firstOperand / secondOperand;
                            break;
                    }
                    display.textContent = result;
                    currentInput = result.toString();
                    firstOperand = result;
                    secondOperand = null;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                    display.textContent = firstOperand+ operator;
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
