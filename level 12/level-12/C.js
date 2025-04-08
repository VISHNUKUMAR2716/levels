const fs = require('fs');
const path = require('path');

const sourceFile = 'sample.txt';
const destinationFile = 'destination.txt';

// Check if source file exists
if (!fs.existsSync(sourceFile)) {
    console.error(`❌ Source file "${sourceFile}" does not exist.`);
    process.exit(1);
}

// Check if destination already exists
if (fs.existsSync(destinationFile)) {
    console.log(`⚠️ Destination file "${destinationFile}" already exists. Copy aborted.`);
} else {
    // Copy the file
    fs.copyFile(sourceFile, destinationFile, (err) => {
        if (err) {
            console.error(`❌ Error copying file: ${err.message}`);
        } else {
            console.log(`✅ File copied successfully from "${sourceFile}" to "${destinationFile}"`);
        }
    });
}
