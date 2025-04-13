const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const ivLength = 16;

// Derive a 32-byte key from the password using PBKDF2
function getKeyFromPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256');
}

function generateIV() {
  return crypto.randomBytes(ivLength);
}

module.exports = { algorithm, getKeyFromPassword, generateIV };
