const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [t, ...nums] = input;
let answer = '';

for(let i = 0; i < Number(t); i++){
  let[a, b] = nums[i].split(' ').map(Number);
  answer += a + b + '\n';
}

console.log(answer)