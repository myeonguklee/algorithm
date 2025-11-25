const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

// Please Write your code here.

const arr = Array(k).fill(0);
let mx = -1e9;

function go(idx) {
  if(idx === n) {
    let score = 0;
    for(const a of arr){
      if(a >= m - 1) score++;
    }
    mx = Math.max(mx, score);
    return;
  }

  for(let i = 0; i < k; i++) {
    arr[i] += nums[idx];
    go(idx + 1);
    arr[i] -= nums[idx];
  }
}

go(0);

console.log(mx);
