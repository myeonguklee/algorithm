const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const A = input[1].split(' ').map(Number);

// Please Write your code here.

const totalSum = A.reduce((acc, cur) => acc + cur, 0);
let mn = 1e9;

function go(idx, cnt, sm) {
  if(cnt === n) {
    mn = Math.min(mn, Math.abs((totalSum - sm) - sm));
    return;
  }
  for(let i = idx; i < 2 * n; i++){
    go(i + 1, cnt + 1, sm + A[i]);
  }
}

go(0, 0, 0);

console.log(mn);