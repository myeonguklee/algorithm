const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1);

// Please Write your code here.

const mp = new Map();

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    if(grid[i][j] === '.') continue
    if(grid[i][j] === 'S' || grid[i][j] === 'E' ) mp.set(grid[i][j], [i, j]);
    else {
      mp.set(Number(grid[i][j]), [i, j]);
    }
  }
}

let mn = 1e9;

function go(idx, cnt, sm, y, x) {
  if(cnt === 3) {
    const [ly, lx] = mp.get('E');
    mn = Math.min(mn, sm + Math.abs(y - ly) + Math.abs(x - lx));
    return;
  }

  for(let i = idx; i <= 9; i++) {
    if(mp.has(i)){
      const [ny, nx] = mp.get(i);
      go(i + 1, cnt + 1, sm + Math.abs(y - ny) + Math.abs(x - nx), ny, nx);
    }
  }
}

if(mp.size < 5) console.log(-1);
else{
  const [sy, sx] = mp.get('S');
  go(0, 0, 0, sy, sx);
  console.log(mn);
}