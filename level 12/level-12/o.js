const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const originalFile = path.join(__dirname, 'testFile.txt');
const compressedFile = path.join(__dirname, 'testFile.txt.gz');
const decompressedFile = path.join(__dirname, 'testFile_decompressed.txt');

// Create a sample test file
function createTestFile() {
  if (!fs.existsSync(originalFile)) {
    fs.writeFileSync(originalFile, 'This is some test content to compress.');
    console.log('✅ Created test file:', originalFile);
  }
}

// Compress the file
function compressFile(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);
    const gzip = zlib.createGzip();

    input.pipe(gzip).pipe(output)
      .on('finish', () => {
        console.log('📦 File compressed to:', outputPath);
        resolve();
      })
      .on('error', (err) => {
        console.error('❌ Compression error:', err.message);
        reject(err);
      });
  });
}

// Decompress the file
function decompressFile(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(inputPath);
    const output = fs.createWriteStream(outputPath);
    const gunzip = zlib.createGunzip();

    input.pipe(gunzip).pipe(output)
      .on('finish', () => {
        console.log('📂 File decompressed to:', outputPath);
        resolve();
      })
      .on('error', (err) => {
        console.error('❌ Decompression error:', err.message);
        reject(err);
      });
  });
}

// Verify decompressed content matches original
function verifyFilesMatch(file1, file2) {
  const original = fs.readFileSync(file1, 'utf-8');
  const decompressed = fs.readFileSync(file2, 'utf-8');

  if (original === decompressed) {
    console.log('✅ Decompressed content matches original!');
  } else {
    console.error('❌ Content mismatch!');
  }
}

// Run the full process
async function runCompressionTest() {
  try {
    createTestFile();
    await compressFile(originalFile, compressedFile);
    await decompressFile(compressedFile, decompressedFile);
    verifyFilesMatch(originalFile, decompressedFile);
  } catch (err) {
    console.error('❌ Error during compression/decompression process:', err.message);
  }
}

runCompressionTest();
