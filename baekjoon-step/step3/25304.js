const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [x, n, ...nums] = input;
x = Number(x);
n = Number(n);

let sm = 0;

for(let i = 0; i < n; i++){
  let[a, b] = nums[i].split(' ').map(Number);
  sm += a * b;
}

console.log(x === sm ? "Yes" : "No");
