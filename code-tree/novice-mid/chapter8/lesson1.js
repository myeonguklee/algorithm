const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));

// Please Write your code here.

let mx = -1e9;

for(let i = 1; i <= n; i++){
  let cnt = 0;
  let idx = i;
  for(let j = 0; j < m; j++){
    cnt += arr[idx];
    idx = arr[idx];
  }
  mx = Math.max(mx, cnt);
}

console.log(mx);