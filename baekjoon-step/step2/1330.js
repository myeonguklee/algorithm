const fs = require('fs');
const [a, b] = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

if(a == b) console.log("==");
else if (a > b) console.log(">");
else if (a < b) console.log("<");