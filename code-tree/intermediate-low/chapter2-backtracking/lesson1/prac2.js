const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

const arr = [];

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    if(grid[i][j] === 1) {
      arr.push([i, j]);
    }
  }
}

const visited = Array(n).fill().map(() => Array(n).fill(0));

let mx = -1e9;


function boom1(y, x) {
  const dy = [-2, -1, 1, 2];
  const dx = [0, 0, 0, 0];
  visited[y][x]++;

  for(let d = 0; d < 4; d++) {
    const ny = y + dy[d];
    const nx = x + dx[d];
    if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
    visited[ny][nx]++;
  }
}

function boom2(y, x) {
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  visited[y][x] = 1;
  for(let d = 0; d < 4; d++) {
    const ny = y + dy[d];
    const nx = x + dx[d];
    if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
    visited[ny][nx]++;
  }
}

function boom3(y, x) {
  const dy = [-1, -1, 1, 1];
  const dx = [-1, 1, 1, -1];

  visited[y][x] = 1;
  for(let d = 0; d < 4; d++) {
    const ny = y + dy[d];
    const nx = x + dx[d];
    if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
    visited[ny][nx]++;
  }
}

function clear1(y, x) {
  const dy = [-2, -1, 1, 2];
  const dx = [0, 0, 0, 0];

  visited[y][x]--;
  for(let d = 0; d < 4; d++) {
    const ny = y + dy[d];
    const nx = x + dx[d];
    if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
    visited[ny][nx]--;
  }
}

function clear2(y, x) {
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  visited[y][x]--;
  for(let d = 0; d < 4; d++) {
    const ny = y + dy[d];
    const nx = x + dx[d];
    if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
    visited[ny][nx]--;
  }
}

function clear3(y, x) {
  const dy = [-1, -1, 1, 1];
  const dx = [-1, 1, 1, -1];

  visited[y][x]--;
  for(let d = 0; d < 4; d++) {
    const ny = y + dy[d];
    const nx = x + dx[d];
    if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
    visited[ny][nx]--;
  }
}

function go (idx) {
  if(idx === arr.length) {
    let cnt = 0;

    for(let i = 0; i < n; i++) {
      for(let j = 0; j < n; j++) {
        if(visited[i][j]) cnt++;
      }
    }

    mx = Math.max(mx, cnt);
    return;
  }

  const [y, x] = arr[idx];

  for(let i = 1; i < 4; i++){
    if(i === 1) {
      boom1(y, x);
      go(idx + 1);
      clear1(y, x);
    } else if (i === 2) {
      boom2(y, x);
      go(idx + 1);
      clear2(y, x);
    } else{
      boom3(y, x);
      go(idx + 1);
      clear3(y, x);
    }
  }
}

go(0);

console.log(mx);