const fs = require("fs");
const crypto = require("crypto");
const { algorithm, getKeyFromPassword } = require("./utils");

const password = process.argv[2];
const inputFile = process.argv[3];
const outputFile = inputFile.replace(".enc", ".dec");

if (!password || !inputFile) {
  console.error("Usage: node decrypt.js <password> <inputFile>");
  process.exit(1);
}

const input = fs.readFileSync(inputFile);

// Extract salt and IV
const salt = input.slice(0, 16);
const iv = input.slice(16, 32);
const encrypted = input.slice(32);

const key = getKeyFromPassword(password, salt);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);

fs.writeFileSync(outputFile, decrypted);

console.log(`File decrypted successfully to ${outputFile}`);
