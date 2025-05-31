const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
input.sort((a, b) => a-b);

if(input[0] === input[1] && input[1] === input[2]) console.log(10_000 + input[0] * 1_000);
else if (input[0] === input[1]) console.log(1_000 + input[0] * 100);
else if (input[1] === input[2]) console.log(1_000 + input[1] * 100);
else console.log(input[2] * 100);