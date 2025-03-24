const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

//let todos = []; // Corrected variable name for clarity

//connting mongo db
mongoose
  .connect("mongodb://localhost:27017/vishnu-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

//create schema
const todoschema = new mongoose.Schema({
  title: String,
  description: String,
});

//createmodal
const toDoModel = mongoose.model("base", todoschema);

// Create a new todo
app.post("/todos", async (req, res) => {
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
app.get("/todos", async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Update a todo
app.put("/todos/:id", async (req, res) => {
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
app.delete("/todos/:id", async (req, res) => {
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

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
