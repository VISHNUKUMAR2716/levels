
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}


const counter1 = createCounter();
const counter2 = createCounter();

console.log("Counter 1:");
console.log(counter1()); 
console.log(counter1()); 
console.log(counter1()); 

console.log("\nCounter 2:");
console.log(counter2()); 
console.log(counter2()); 

console.log("\nCounter 1 again:");
console.log(counter1()); 
