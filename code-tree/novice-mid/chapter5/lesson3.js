const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1];
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));
// Please Write your code here.

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let d = 0;
let y = Math.floor(n / 2);
let x = Math.floor(n / 2);
let sm = board[y][x];

for(c of commands){
  if (c === 'R') d = (d + 1) % 4;
  else if (c === 'L') d = (d - 1 + 4) % 4;
  else{
    let ny = y + dy[d];
    let nx = x + dx[d];
    if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
    sm += board[ny][nx];
    y = ny;
    x = nx;
  }
}

console.log(sm);