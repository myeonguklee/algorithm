const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const visited = Array(n).fill().map(()=> Array(n).fill(0));
let mx = -1e9;

function check (y, x) {
  if(visited[y].some((x) => x === 1)) return true;
  for(let i = 0; i < n; i++) {
    if(visited[i][x] === 1) return true;
  }
  return false;
}

function go(cnt, sm) {
  if(cnt === n) {
    mx = Math.max(mx, sm);
    return;
  }

  for(let j = 0; j < n; j++) {
    if(check(cnt, j)) continue;

    visited[cnt][j] = 1;
    go(cnt + 1, sm + grid[cnt][j]);
    visited[cnt][j] = 0;
  }
}

go(0, 0);

console.log(mx);


// 코드 개선
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const visited = Array(n).fill(0);
let mx = -1e9;

function go(y, sm) {
  if(y === n) {
    mx = Math.max(mx, sm);
    return;
  }

  for(let x = 0; x < n; x++) {
    if(visited[x]) continue;

    visited[x] = 1;
    go(y + 1, sm + grid[y][x]);
    visited[x] = 0;
  }
}

go(0, 0);

console.log(mx);