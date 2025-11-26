const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const moveDir = input.slice(1 + n, 1 + 2 * n).map(line => line.split(' ').map(Number));
const [r, c] = input[1 + 2 * n].split(' ').map(Number);

// Please Write your code here.

const dy = [0, -1, -1, 0, 1, 1, 1, 0, -1];
const dx = [0, 0, 1, 1, 1, 0, -1, -1, -1];

let mx = -1e9;

function go (cnt, y, x) {
  mx = Math.max(mx, cnt);

  let k = 1;
  let d = moveDir[y][x];

  while(true) {
    const ny = y + dy[d] * k;
    const nx = x + dx[d] * k;
    if(ny < 0 || ny >= n || nx < 0 || nx >= n) break;
    if(num[y][x] < num[ny][nx]) go(cnt + 1, ny, nx);
    k++;
  }
}

go(0, r - 1, c - 1);

console.log(mx);