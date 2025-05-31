const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

let sm = 0;

for(let i = 0; i < n; i++){
  sm += Number(input[1][i]);
}

console.log(sm);