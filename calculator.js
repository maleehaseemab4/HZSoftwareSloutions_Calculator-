
let isDegreeMode = true;
let isInverseMode = false;
let lastAnswer = 0;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    const display = document.getElementById('display');
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    try {
        const display = document.getElementById('display');
        const expression = display.value.trim();
        
        // Check if expression is empty
        if (expression === '') {
            display.value = '';
            return;
        }
        
        // Check for incomplete expressions (ending with operator)
        if (/[+\-*/]$/.test(expression)) {
            display.value = 'Error: Incomplete expression';
            setTimeout(() => {
                display.value = expression;
            }, 1500);
            return;
        }
        
        lastAnswer = eval(expression);
        display.value = lastAnswer;
    } catch (error) {
        document.getElementById('display').value = 'Error: Invalid expression';
        setTimeout(() => {
            document.getElementById('display').value = '';
        }, 1500);
    }
}

function appendSciDisplay(value) {
    // Handle special cases for Math constants
    if (typeof value === 'number') {
        value = value.toFixed(10).replace(/\.?0+$/, ''); // Remove trailing zeros
    }
    document.getElementById('display').value += value;
}

function clearSciDisplay() {
    document.getElementById('display').value = '';
    isInverseMode = false;
    updateInverseButton();
}

function deleteSciLastChar() {
    const display = document.getElementById('display');
    display.value = display.value.toString().slice(0, -1);
}

function toggleDegRad() {
    isDegreeMode = !isDegreeMode;
    const btn = document.getElementById('degRadBtn');
    btn.value = isDegreeMode ? 'Deg' : 'Rad';
}

function toggleInverse() {
    isInverseMode = !isInverseMode;
    updateInverseButton();
}

function updateInverseButton() {
    const invBtn = document.getElementById('invBtn');
    const sinBtn = document.getElementById('sinBtn');
    const cosBtn = document.getElementById('cosBtn');
    const tanBtn = document.getElementById('tanBtn');
    
    if (isInverseMode) {
        invBtn.style.background = '#00d4ff';
        invBtn.style.color = '#3d4852';
        sinBtn.value = 'arcsin';
        cosBtn.value = 'arccos';
        tanBtn.value = 'arctan';
    } else {
        invBtn.style.background = '#495463';
        invBtn.style.color = '#fff';
        sinBtn.value = 'sin';
        cosBtn.value = 'cos';
        tanBtn.value = 'tan';
    }
}

function factorial(n) {
    if (n < 0) return 'Error';
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function scientificFunction(func) {
    const display = document.getElementById('display');
    let value = parseFloat(display.value);
    let result;

    try {
        switch(func) {
            case 'sin':
                if (isInverseMode) {
                    result = isDegreeMode ? Math.asin(value) * 180 / Math.PI : Math.asin(value);
                    isInverseMode = false;
                    updateInverseButton();
                } else {
                    result = isDegreeMode ? Math.sin(value * Math.PI / 180) : Math.sin(value);
                }
                break;
            case 'cos':
                if (isInverseMode) {
                    result = isDegreeMode ? Math.acos(value) * 180 / Math.PI : Math.acos(value);
                    isInverseMode = false;
                    updateInverseButton();
                } else {
                    result = isDegreeMode ? Math.cos(value * Math.PI / 180) : Math.cos(value);
                }
                break;
            case 'tan':
                if (isInverseMode) {
                    result = isDegreeMode ? Math.atan(value) * 180 / Math.PI : Math.atan(value);
                    isInverseMode = false;
                    updateInverseButton();
                } else {
                    result = isDegreeMode ? Math.tan(value * Math.PI / 180) : Math.tan(value);
                }
                break;
            case 'sqrt':
                result = Math.sqrt(value);
                break;
            case 'square':
                result = value * value;
                break;
            case 'cube':
                result = value * value * value;
                break;
            case 'log':
                result = Math.log10(value);
                break;
            case 'ln':
                result = Math.log(value);
                break;
            case 'reciprocal':
                result = 1 / value;
                break;
            case 'factorial':
                result = factorial(Math.floor(value));
                break;
            default:
                result = value;
        }
        // Round to avoid floating point errors
        result = Math.round(result * 1e10) / 1e10;
        display.value = result;
        lastAnswer = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function useLastAnswer() {
    appendToDisplay(lastAnswer.toString());
}

function calculateScientific() {
    try {
        const display = document.getElementById('display');
        let expression = display.value;
        
        // Replace operators and constants
        expression = expression.replace(/\^/g, '**');
        expression = expression.replace(/π/g, Math.PI);
        expression = expression.replace(/e(?![a-zA-Z0-9])/g, Math.E);
        
        lastAnswer = eval(expression);
        // Round to avoid floating point errors
        lastAnswer = Math.round(lastAnswer * 1e10) / 1e10;
        display.value = lastAnswer;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function toggleScientificDrawer() {
    const drawer = document.getElementById('sciDrawer');
    const overlay = document.getElementById('sciOverlay');
    const scBtn = document.getElementById('scBtn');
    
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
    
    // Highlight SC button when drawer is open
    if (drawer.classList.contains('open')) {
        scBtn.style.background = '#00d4ff';
        scBtn.style.color = '#3d4852';
    } else {
        scBtn.style.background = '#495463';
        scBtn.style.color = '#fff';
    }
}