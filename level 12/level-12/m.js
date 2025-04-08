const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'source');
const targetDir = path.join(__dirname, 'target');

function syncDirectories(source, target) {
  let actions = [];

  try {
    // Ensure target exists
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true });
      actions.push(`📁 Created directory: ${target}`);
    }

    const sourceItems = fs.readdirSync(source);
    const targetItems = fs.existsSync(target) ? fs.readdirSync(target) : [];

    // Copy or update files from source to target
    for (const item of sourceItems) {
      const sourcePath = path.join(source, item);
      const targetPath = path.join(target, item);
      const stat = fs.statSync(sourcePath);

      if (stat.isDirectory()) {
        actions.push(...syncDirectories(sourcePath, targetPath));
      } else {
        const shouldCopy =
          !fs.existsSync(targetPath) ||
          fs.statSync(targetPath).mtimeMs < stat.mtimeMs;

        if (shouldCopy) {
          fs.copyFileSync(sourcePath, targetPath);
          actions.push(`📄 Copied/Updated: ${targetPath}`);
        }
      }
    }

    // Delete files in target that don't exist in source
    for (const item of targetItems) {
      const sourcePath = path.join(source, item);
      const targetPath = path.join(target, item);

      if (!fs.existsSync(sourcePath)) {
        fs.rmSync(targetPath, { recursive: true, force: true });
        actions.push(`❌ Deleted: ${targetPath}`);
      }
    }

    return actions;
  } catch (err) {
    console.error(`❌ Error syncing directories: ${err.message}`);
    return [`❌ Failed to sync: ${err.message}`];
  }
}

// Create test directories and files if they don't exist
function setupTestDirs() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
    fs.writeFileSync(path.join(sourceDir, 'file1.txt'), 'This is file 1');
    fs.writeFileSync(path.join(sourceDir, 'file2.txt'), 'This is file 2');
    fs.mkdirSync(path.join(sourceDir, 'subdir'));
    fs.writeFileSync(path.join(sourceDir, 'subdir', 'file3.txt'), 'Nested file');
    console.log('✅ Created test source directory.');
  }

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'oldfile.txt'), 'This should be deleted');
    console.log('✅ Created test target directory.');
  }
}

// Run the sync
setupTestDirs();
const actionsTaken = syncDirectories(sourceDir, targetDir);

console.log('\n📋 Sync Summary:');
actionsTaken.forEach(action => console.log(action));
