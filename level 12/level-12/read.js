const fs = require('fs');

// Read sample.txt file
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("File Contents:\n" + data);
});
