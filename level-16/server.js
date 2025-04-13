const express = require('express');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files like HTML
app.use(express.static('public'));

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const isValid = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  if (isValid) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'));
  }
};

const upload = multer({ 
  storage, 
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5 MB limit
});

// Route to serve the upload form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'upload-form.html'));
});

// Handle file upload
app.post('/upload', upload.single('myfile'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded or invalid file type.');
  }

  res.send(`
    <h2>Upload Successful!</h2>
    <p>File: ${req.file.originalname}</p>
    <p>Stored as: ${req.file.filename}</p>
    <img src="/uploads/${req.file.filename}" style="max-width:300px;" />
    <br><a href="/">Upload another file</a>
  `);
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Error handler
app.use((err, req, res, next) => {
  res.status(400).send(`<h2>Error:</h2><p>${err.message}</p><a href="/">Try again</a>`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
