const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const algorithm = 'aes-256-cbc';
const password = 'myStrongPassword123'; // Use env vars in production
const key = crypto.scryptSync(password, 'salt', 32);
const iv = crypto.randomBytes(16); // Initialization vector

const originalFile = path.join(__dirname, 'sensitive.txt');
const encryptedFile = path.join(__dirname, 'encrypted.dat');
const decryptedFile = path.join(__dirname, 'decrypted.txt');

// Write test data
fs.writeFileSync(originalFile, 'This is some super secret info! 🔐');

// Encrypt file
function encryptFile() {
  const readStream = fs.createReadStream(originalFile);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const writeStream = fs.createWriteStream(encryptedFile);

  writeStream.write(iv); // Store IV in file

  readStream.pipe(cipher).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('✅ File encrypted successfully.');
    decryptFile();
  });

  writeStream.on('error', (err) => {
    console.error('❌ Encryption failed:', err.message);
  });
}

// Decrypt file
function decryptFile() {
  const readStream = fs.createReadStream(encryptedFile);

  let ivRead = null;
  readStream.once('readable', () => {
    ivRead = readStream.read(16);
    const decipher = crypto.createDecipheriv(algorithm, key, ivRead);
    const writeStream = fs.createWriteStream(decryptedFile);

    readStream.pipe(decipher).pipe(writeStream);

    writeStream.on('finish', () => {
      console.log('✅ File decrypted successfully.');

      // Verify content
      const original = fs.readFileSync(originalFile, 'utf8');
      const decrypted = fs.readFileSync(decryptedFile, 'utf8');
      if (original === decrypted) {
        console.log('🔒 Decryption verified: content matches original!');
      } else {
        console.warn('⚠️ Decryption failed: content mismatch!');
      }
    });

    writeStream.on('error', (err) => {
      console.error('❌ Decryption write error:', err.message);
    });
  });

  readStream.on('error', (err) => {
    console.error('❌ Decryption read error:', err.message);
  });
}

encryptFile();
