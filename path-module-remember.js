const path = require("path");
console.log(path.sep);
const filePath = path.join("/node tutorial/", "app.js");
console.log(filePath);
console.log(path.basename(filePath));
const absolute = path.resolve(__dirname, "/node tutorial/", "app.js");
console.log(absolute);
