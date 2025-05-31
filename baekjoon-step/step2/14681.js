const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

if(a > 0) console.log(b > 0 ? 1 : 4);
else console.log(b > 0 ? 2 : 3);