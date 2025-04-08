const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'data.csv');
const outputFile = path.join(__dirname, 'results.txt');

// Helper to calculate average, min, max
function processColumn(values) {
  const nums = values.map(Number).filter(n => !isNaN(n));
  const sum = nums.reduce((a, b) => a + b, 0);
  const avg = (sum / nums.length).toFixed(2);
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  return { avg, max, min };
}

// Read and process CSV
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error reading CSV file:', err.message);
    return;
  }

  const lines = data.trim().split('\n');
  const headers = lines[0].split(',');

  const columns = headers.map(() => []);

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    values.forEach((val, idx) => {
      columns[idx].push(val);
    });
  }

  const results = [];

  headers.forEach((header, idx) => {
    const stats = processColumn(columns[idx]);
    results.push(
      `📊 ${header} - Avg: ${stats.avg}, Max: ${stats.max}, Min: ${stats.min}`
    );
  });

  // Write results
  fs.writeFile(outputFile, results.join('\n'), (err) => {
    if (err) {
      console.error('❌ Error writing results:', err.message);
    } else {
      console.log('✅ Results written to results.txt');
    }
  });
});
