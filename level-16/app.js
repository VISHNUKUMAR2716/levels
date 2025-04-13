const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

// In-memory product array
let products = [
  { id: 1, name: 'Laptop', price: 1200, description: 'High performance laptop' },
  { id: 2, name: 'Phone', price: 600, description: 'Latest smartphone' }
];

// GET /products - List all products
app.get('/products', (req, res) => {
  res.status(200).json(products);
});

// GET /products/:id - Get product by ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
});

// POST /products - Create new product
app.post('/products', (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /products/:id - Update a product
app.put('/products/:id', (req, res) => {
  const { name, price, description } = req.body;
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  product.name = name ?? product.name;
  product.price = price ?? product.price;
  product.description = description ?? product.description;

  res.status(200).json(product);
});

// DELETE /products/:id - Delete a product
app.delete('/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).json({ message: 'Product not found' });

  const deletedProduct = products.splice(productIndex, 1);
  res.status(200).json({ message: 'Product deleted', product: deletedProduct[0] });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
