const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const v = Number(input[2]);
const nums = input[1].split(' ').map(Number);

let ret = 0;

for(let i = 0; i < n; i++){
  if (v === nums[i]) ret++;
}

console.log(ret);

// filter 사용하는 방법도 가능