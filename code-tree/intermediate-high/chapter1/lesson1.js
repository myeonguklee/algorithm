// Trail 4. Intermediate Low
// Chapter 1. Simulation

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

function solve(i, j, k, l){
  for(let y = i; y < k + 1; y++){
    for(let x = j; x < l + 1; x++){
      if(grid[y][x] <= 0) return -1;
    }
  }
  return (k + 1 - i) * (l + 1 - j);
}

let mx = -1e9;

for(let i = 0; i < n; i++){
  for(let j = 0; j < m; j++){
    for(let k = i; k < n; k++){
      for(let l = j; l < m; l++){
        mx = Math.max(mx, solve(i, j, k, l));
      }
    }
  }
}

console.log(mx);