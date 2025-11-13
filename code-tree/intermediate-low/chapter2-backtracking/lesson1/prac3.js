const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let mx = 0;

segments.sort((a, b) => a[0] - b[0]);

function go(idx, left, right, cnt) {
  if(idx === segments.length) {
    mx = Math.max(mx, cnt);
    return;
  }
  if(right < segments[idx][0]) {
    // 고르는 경우
    go(idx + 1, segments[idx][0], segments[idx][1], cnt + 1);
  }
  // 고르지 않는 경우
  go(idx + 1, left, right, cnt)
}

go(0, 0, 0, 0);

console.log(mx);