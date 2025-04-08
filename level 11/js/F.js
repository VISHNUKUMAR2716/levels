// Higher-order function
function operateOnArray(arr, operation) {
    return arr.map(operation);
}

// Callback functions
const double = num => num * 2;
const square = num => num * num;
const toString = num => num.toString();

// Sample array
const numbers = [1, 2, 3, 4, 5];

// Using the higher-order function with different callbacks
const doubled = operateOnArray(numbers, double);
const squared = operateOnArray(numbers, square);
const stringified = operateOnArray(numbers, toString);

// Print results
console.log("Original Array:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
console.log("Stringified:", stringified);
