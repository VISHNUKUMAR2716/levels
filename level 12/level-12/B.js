const fs = require('fs');
const path = require('path');

// Read contents of the current directory
fs.readdir('.', (err, files) => {
    if (err) {
        console.error(`❌ Error reading directory: ${err.message}`);
        return;
    }

    console.log('📂 Contents of current directory:');

    files.forEach(file => {
        try {
            const filePath = path.join(__dirname, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                console.log(`📁 [DIR]  ${file}`);
            } else {
                console.log(`📄 [FILE] ${file}`);
            }
        } catch (err) {
            console.error(`❌ Error accessing ${file}: ${err.message}`);
        }
    });
});
