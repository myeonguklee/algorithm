const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let sm = arr.reduce((pre, cur) => pre + cur, 0);

let mn = 1e9;

for(let i = 0; i < n; i++){
  for(let j = i + 1; j < n; j++){
    mn = Math.min(mn, Math.abs(s - (sm - arr[i] - arr[j])));
  }
}

console.log(mn);