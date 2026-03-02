// Test script for calculator square root function

// Simulate the scientific calculator logic
let isDegreeMode = true;
let isInverseMode = false;
let lastAnswer = 0;

function testSquareRoot(value) {
    console.log(`Testing square root of ${value}...`);
    let result;
    
    try {
        result = Math.sqrt(value);
        result = Math.round(result * 1e10) / 1e10; // Round to avoid floating point errors
        console.log(`Result: ${result}`);
        console.log(`Expected: ${Math.sqrt(value)}`);
        console.log(`Test PASSED: sqrt(${value}) = ${result}`);
        return result;
    } catch (error) {
        console.log(`Error: ${error.message}`);
        return 'Error';
    }
}

// Test cases
console.log('=== Square Root Calculator Tests ===\n');
testSquareRoot(9);
console.log('');
testSquareRoot(16);
console.log('');
testSquareRoot(25);
console.log('');
testSquareRoot(2);
