const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);

for(let i = 1; i <= t; i++){
  console.log(`${input[i][0]}${input[i][input[i].length - 1]}`);
}