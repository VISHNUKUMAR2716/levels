const fs = require('fs');

const oldName = 'echo.txt';
const newName = 'renamed.txt';

fs.rename(oldName, newName, (err) => {
    if (err) {
        console.error(`❌ Error renaming file: ${err.message}`);
        return;
    }
    console.log(`✅ File renamed successfully from '${oldName}' to '${newName}'`);
});
