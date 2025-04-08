const fs = require('fs');
const fileToDelete = 'sample.txt';

// Check if file exists before attempting to delete
if (fs.existsSync(fileToDelete)) {
    fs.unlink(fileToDelete, (err) => {
        if (err) {
            console.error(`❌ Error deleting file: ${err.message}`);
        } else {
            console.log(`✅ File "${fileToDelete}" deleted successfully.`);
        }
    });
} else {
    console.log(`⚠️ File "${fileToDelete}" does not exist.`);
}
