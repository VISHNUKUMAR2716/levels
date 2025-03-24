const express = require("express");
const mongoose = require("mongoose");
const cors =require('cors')

// Create an instance of express
const app = express();
app.use(express.json());
app.use(cors())

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mern-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!"))
  .catch((err) => console.error("DB connection error:", err));

// Define Schema
const todoSchema = new mongoose.Schema({
  title: { required: true, type: String },
  description: String,
});

// Create Model
const todoModel = mongoose.model("todo", todoSchema);

// Create a new todo
app.post("/list", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new todoModel({ title, description });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Get all todos
app.get("/list", async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Update a todo
app.put("/list/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedTodo = await todoModel.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Delete a todo
app.delete("/list/:id", async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    await todoModel.findByIdAndDelete(req.params.id);
    res.status(204).send(); // No content response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const port = 8001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
