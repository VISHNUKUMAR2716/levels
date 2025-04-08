const fs = require('fs');

// File to check
const fileName = 'output.txt';

fs.stat(fileName, (err, stats) => {
    if (err) {
        console.error(`Error getting stats for ${fileName}:`, err.message);
        return;
    }

    console.log(`📄 Stats for ${fileName}:`);
    console.log(`🧾 Size: ${stats.size} bytes`);
    console.log(`📅 Created: ${stats.birthtime.toLocaleString()}`);
    console.log(`✏️ Last Modified: ${stats.mtime.toLocaleString()}`);
});
