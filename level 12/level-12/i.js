const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'largeFile.txt');
const destinationFile = path.join(__dirname, 'copiedLargeFile.txt');

// Check if the source file exists
if (!fs.existsSync(sourceFile)) {
  console.error('❌ Source file does not exist. Please create largeFile.txt (at least 1MB).');
  process.exit(1);
}

const totalSize = fs.statSync(sourceFile).size;
let copiedSize = 0;

const readStream = fs.createReadStream(sourceFile);
const writeStream = fs.createWriteStream(destinationFile);

console.log('📥 Starting file copy...\n');

readStream.on('data', (chunk) => {
  copiedSize += chunk.length;
  const percentage = ((copiedSize / totalSize) * 100).toFixed(2);
  process.stdout.write(`📊 Progress: ${percentage}%\r`);
});

readStream.on('end', () => {
  console.log('\n✅ File copy completed!');
});

readStream.on('error', (err) => {
  console.error('❌ Error during read:', err.message);
});

writeStream.on('error', (err) => {
  console.error('❌ Error during write:', err.message);
});

// Pipe the data from the read stream to the write stream
readStream.pipe(writeStream);
