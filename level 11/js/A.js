// Function to divide two numbers with error handling
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Call the function using try/catch/finally
function testDivision(x, y) {
    try {
        const result = divideNumbers(x, y);
        console.log(`Result of ${x} / ${y} = ${result}`);
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Division operation attempted.\n");
    }
}

// Test with different inputs
testDivision(10, 2);   // Valid division
testDivision(5, 0);    // Division by zero
testDivision(15, 3);   // Another valid division
