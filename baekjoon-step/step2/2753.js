const fs = require('fs');
const input = fs.readFileSync("dev/stdin").toString().trim();
const num = Number(input);

if (num % 400 === 0) console.log(1);
else if (!(num % 4) && num % 100) console.log(1);
else console.log(0);