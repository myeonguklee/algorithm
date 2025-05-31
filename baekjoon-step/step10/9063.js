const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

let minX = 10_001;
let minY = 10_001;
let maxX = -10_001;
let maxY = -10_001;

for(let i = 1; i <= n; i++){
  const [x, y] = input[i].split(' ').map(Number);
  minX = Math.min(minX, x);
  minY = Math.min(minY, y);
  maxX = Math.max(maxX, x);
  maxY = Math.max(maxY, y);
}

console.log((maxY - minY) * (maxX - minX));