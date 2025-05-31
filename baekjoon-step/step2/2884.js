const fs = require('fs');

const [h, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

if (m >= 45) console.log(h, m - 45);
else if (h === 0) console.log(h + 23, m + 15);
else console.log(h - 1, m + 15);
