const fs = require('fs-extra');
const path = require('path');
const dayjs = require('dayjs');

const config = require('./backup.json');
const logPath = path.join(__dirname, 'logs', 'backup-log.txt');

const timestamp = dayjs().format('YYYY-MM-DD_HH-mm-ss');
const backupFolder = path.join(config.backupDirectory, `backup-${timestamp}`);

async function runBackup() {
  try {
    await fs.ensureDir(path.join(__dirname, 'logs'));
    await fs.ensureDir(backupFolder);
    
    await fs.copy(config.sourceDirectory, backupFolder, {
      overwrite: true,
      errorOnExist: false,
    });

    const logEntry = `[${timestamp}] Backup successful: ${backupFolder}\n`;
    await fs.appendFile(logPath, logEntry);
    console.log('✅ Backup completed successfully.');
  } catch (err) {
    const errorLog = `[${timestamp}] Backup failed: ${err.message}\n`;
    await fs.appendFile(logPath, errorLog);
    console.error('❌ Backup failed:', err);
  }
}

runBackup();
