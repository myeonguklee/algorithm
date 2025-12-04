const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const points = input.slice(1, Number(n) + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let mn = 1e9;
const temp = [];

function dist(x1, y1, x2, y2) {
  return (x1 - x2)**2 + (y1 - y2)**2;
}

function go(idx, cnt) {
  if(cnt === m) {
    let mx = -1e9;
    for(let i = 0; i < m - 1; i++) {
      const [x1, y1] = temp[i];
      for(let j = i + 1; j < m; j++) {
        const [x2, y2] = temp[j];
        mx = Math.max(mx, dist(x1, y1, x2, y2));
      }
    }
    mn = Math.min(mn, mx);
    return;
  }

  for(let i = idx; i < n; i++) {
    temp.push(points[i]);
    go(i + 1, cnt + 1);
    temp.pop();
  }
}

go(0, 0);

console.log(mn);