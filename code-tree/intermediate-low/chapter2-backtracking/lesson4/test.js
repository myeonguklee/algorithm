const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let mx = -1e9;
const visited = Array(n).fill(0);

function go(row, mn) {
  if(row === n) {
    mx = Math.max(mx, mn);
    return;
  }
  for(let col = 0; col < n; col++) {
    if(visited[col]) continue;

    visited[col] = 1;
    go(row + 1, Math.min(mn, grid[row][col]));
    visited[col] = 0;
  }
}

go(0, 1e9);

console.log(mx);