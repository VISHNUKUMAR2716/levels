const fs = require('fs');
const path = require('path');
const os = require('os');

// Create a unique temporary directory
const tempDirPrefix = path.join(os.tmpdir(), 'myTempDir-');

fs.mkdtemp(tempDirPrefix, (err, folder) => {
  if (err) {
    console.error('❌ Error creating temporary directory:', err.message);
    return;
  }

  console.log(`✅ Temporary directory created: ${folder}`);

  // Create multiple temp files and write data to each
  for (let i = 1; i <= 3; i++) {
    const filePath = path.join(folder, `file${i}.txt`);
    const content = `This is temp file ${i}`;

    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error(`❌ Error writing to ${filePath}:`, err.message);
      } else {
        console.log(`📄 File created: ${filePath}`);
      }
    });
  }
});
