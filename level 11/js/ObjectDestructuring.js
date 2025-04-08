const product = {
    name: "Wireless Mouse",
    price: 999,
    category: "Electronics",
    inStock: true
};

const { name, price, category, inStock } = product;

console.log("Destructured Variables:");
console.log("Name:", name);
console.log("Price:", price);
console.log("Category:", category);
console.log("In Stock:", inStock);


function displayProduct({ name, price, category, inStock }) {
    return `Product: ${name}
Category: ${category}
Price: ₹${price}
Available: ${inStock ? "Yes" : "No"}`;
}


const result = displayProduct(product);
console.log("\nProduct Details:\n" + result);
