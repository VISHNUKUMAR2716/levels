const express = require('express');
const router = express.Router();
const JournalEntry = require("./JournalEntry")

// Create
router.post('/', async (req, res) => {
  const newEntry = new JournalEntry(req.body);
  await newEntry.save();
  res.status(201).json(newEntry);
});

// Read
router.get('/', async (req, res) => {
  const entries = await JournalEntry.find().sort({ createdAt: -1 });
  res.json(entries);
});

// Update
router.put('/:id', async (req, res) => {
  const updated = await JournalEntry.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete('/:id', async (req, res) => {
  await JournalEntry.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
