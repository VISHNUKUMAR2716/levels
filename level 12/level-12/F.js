const fs = require('fs');
const path = require('path');

function readDirectoryRecursive(dirPath) {
    fs.readdir(dirPath, (err, items) => {
        if (err) {
            console.error(`❌ Error reading directory ${dirPath}:`, err.message);
            return;
        }

        items.forEach(item => {
            const fullPath = path.join(dirPath, item);
            fs.stat(fullPath, (err, stats) => {
                if (err) {
                    console.error(`❌ Error accessing ${fullPath}:`, err.message);
                    return;
                }

                if (stats.isDirectory()) {
                    console.log(`📁 Directory: ${fullPath}`);
                    // Recursively read subdirectories
                    readDirectoryRecursive(fullPath);
                } else {
                    console.log(`📄 File: ${fullPath}`);
                }
            });
        });
    });
}

// Replace this with your test folder path if needed
const startPath = path.join(__dirname, 'test_folder');

if (fs.existsSync(startPath)) {
    console.log(`🔍 Reading contents of ${startPath} recursively...\n`);
    readDirectoryRecursive(startPath);
} else {
    console.log(`❌ Directory "${startPath}" does not exist. Please create it with some subdirectories/files.`);
}
