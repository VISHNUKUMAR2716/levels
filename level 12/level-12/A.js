const fs = require('fs');
const path = require('path');

const folderName = 'new_folder';

// Check if the directory already exists
if (fs.existsSync(folderName)) {
    console.log(`📁 Directory '${folderName}' already exists.`);
} else {
    fs.mkdir(folderName, (err) => {
        if (err) {
            console.error(`❌ Error creating directory: ${err.message}`);
            return;
        }
        console.log(`✅ Directory '${folderName}' created successfully!`);
    });
}
