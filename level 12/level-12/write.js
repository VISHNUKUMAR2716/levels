const fs = require("fs");

const content = "hello";

fs.writeFile("sample.txt", content, "utf-8", (err) => {
  if (err) {
    console.log("error writing to file:", err.message);
    return;
  }
  console.log("file written successfully!");
});
