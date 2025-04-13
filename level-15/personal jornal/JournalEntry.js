const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('JournalEntry', journalSchema);
