const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

let[t, ...nums] = input;
t = Number(t);

for(let i = 0; i < t; i++){
  let[a, b] = nums[i].split(" ").map(Number);
  console.log(a + b);
}
