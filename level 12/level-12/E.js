const fs = require('fs');

const fileToWatch = 'renamed.txt';

// Check if the file exists before watching
if (fs.existsSync(fileToWatch)) {
    console.log(`👀 Watching for changes in "${fileToWatch}"...`);

    fs.watch(fileToWatch, (eventType, filename) => {
        if (filename) {
            console.log(`📌 File ${filename} has a ${eventType === 'rename' ? 'rename' : 'change'} event.`);
        } else {
            console.log(`⚠️ A change was detected, but filename is not available.`);
        }
    });

} else {
    console.log(`❌ File "${fileToWatch}" does not exist. Please create it first.`);
}
