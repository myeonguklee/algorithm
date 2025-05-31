const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let mn = 1e9;

for(let i = 0; i < n - t + 1; i++){
  let cnt = 0;
  for(let j = i; j < i + t; j++){
    cnt += Math.abs(h - arr[j]);
  }
  mn = Math.min(mn, cnt);
}

console.log(mn);