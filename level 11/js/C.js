// Create two arrays
const fruits = ['apple', 'banana', 'mango'];
const vegetables = ['carrot', 'broccoli', 'spinach'];

// Combine arrays using spread operator
const combinedArray = [...fruits, ...vegetables];

// Create two objects
const person = { name: 'Arun', age: 22 };
const details = { city: 'Chennai', job: 'Developer' };

// Combine objects using spread operator
const combinedObject = { ...person, ...details };

// Create a copy of an array and modify it
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray.push(4); // Modify copy

// Print all results
console.log("Fruits:", fruits);
console.log("Vegetables:", vegetables);
console.log("Combined Array:", combinedArray);

console.log("\nPerson Object:", person);
console.log("Details Object:", details);
console.log("Combined Object:", combinedObject);

console.log("\nOriginal Array:", originalArray);
console.log("Copied & Modified Array:", copiedArray);
