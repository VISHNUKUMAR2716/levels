const fs = require("fs");
const crypto = require("crypto");
const { algorithm, getKeyFromPassword, generateIV } = require("./utils");

const password = process.argv[2];
const inputFile = process.argv[3];
const outputFile = inputFile + ".enc";

if (!password || !inputFile) {
  console.error("Usage: node encrypt.js <password> <inputFile>");
  process.exit(1);
}

const salt = crypto.randomBytes(16);
const iv = generateIV();
const key = getKeyFromPassword(password, salt);

const cipher = crypto.createCipheriv(algorithm, key, iv);

const input = fs.createReadStream(inputFile);
const output = fs.createWriteStream(outputFile);

output.write(salt); // Save salt at beginning
output.write(iv);   // Save IV after salt

input.pipe(cipher).pipe(output);

output.on("finish", () => {
  console.log(`File encrypted successfully to ${outputFile}`);
});
