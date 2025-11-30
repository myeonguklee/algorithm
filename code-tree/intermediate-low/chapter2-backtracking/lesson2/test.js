const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

// Please write your code here.

let mn = 1e9;

function go(idx, cnt) {
  if(idx === n - 1) {
    mn = Math.min(cnt, mn);
    return;
  }
  if(idx >= n) return;

  for(let i = 1; i <= nums[idx]; i++) {
    go(idx + i, cnt + 1);
  }
}

go(0, 0);

console.log(mn === 1e9 ? -1 : mn);