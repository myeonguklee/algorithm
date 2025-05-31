const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

let answer = '*'

for(let i = 0; i < n; i++){
  console.log(answer);
  answer += '*';
}

