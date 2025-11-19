const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, c] = input[0].split(' ').map(Number);
const weights = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let answer = -1e9;

function possible(y1, x1, y2, x2) {
  if(x1 + m > n || x2 + m > n) return false;
  if(y1 !== y2) return true;
  return x1 + m <= x2 || x2 + m <= x1
}

let mx = 0;

function find(y, x, cnt, sm, value) {
  if(cnt === m){
    if(sm <= c ) mx = Math.max(mx, value);
    return;
  };
  find(y, x + 1, cnt + 1, sm + weights[y][x], value + weights[y][x]**2);
  find(y, x + 1, cnt + 1, sm, value);
}

for(let y1 = 0; y1 < n; y1++) {
  for(let x1 = 0; x1 < n; x1++) {
    for(let y2 = 0; y2 < n; y2++) {
      for(let x2 = 0; x2 < n; x2++) {
        if(possible(y1, x1, y2, x2)) {
          mx = 0;
          find(y1, x1, 0, 0, 0);
          const sm1 = mx;
          mx = 0;
          find(y2, x2, 0, 0, 0);
          const sm2 = mx
          answer = Math.max(answer, sm1 + sm2);
        }
      }
    }
  }
}

console.log(answer);