require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Parser = require('rss-parser');
const cors = require('cors');
const cron = require('node-cron');

const app = express();
const parser = new Parser();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// Mongoose Models
const FeedSchema = new mongoose.Schema({
  title: String,
  url: { type: String, required: true, unique: true }
});
const Feed = mongoose.model('Feed', FeedSchema);

const ArticleSchema = new mongoose.Schema({
  title: String,
  link: { type: String, unique: true },
  description: String,
  pubDate: Date,
  feedTitle: String
});
const Article = mongoose.model('Article', ArticleSchema);

// Routes

// Get all articles
app.get('/api/articles', async (req, res) => {
  const articles = await Article.find().sort({ pubDate: -1 });
  res.json(articles);
});

// Get all feeds

app.post('/api/feeds', async (req, res) => {
    try {
      const feed = await Feed.create(req.body);
      res.status(201).json(feed);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  

// Add new feed
app.post('/api/feeds', async (req, res) => {
  try {
    const feed = await Feed.create(req.body);
    res.status(201).json(feed);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Fetch and store articles from all feeds
const fetchAndStoreFeeds = async () => {
  const feeds = await Feed.find();
  for (const feed of feeds) {
    try {
      const parsed = await parser.parseURL(feed.url);
      for (const item of parsed.items) {
        const exists = await Article.findOne({ link: item.link });
        if (!exists) {
          await Article.create({
            title: item.title,
            link: item.link,
            description: item.contentSnippet || item.content || '',
            pubDate: new Date(item.pubDate),
            feedTitle: parsed.title
          });
        }
      }
    } catch (err) {
      console.error(`❌ Error fetching feed ${feed.url}:`, err.message);
    }
  }
};

// Run every 15 minutes
cron.schedule('*/15 * * * *', async () => {
  console.log("⏰ Fetching RSS feeds...");
  await fetchAndStoreFeeds();
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
