const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const x1 = [];
const x2 = [];
for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  x1.push(a);
  x2.push(b);
}

// Please Write your code here.

let mn = 1e9;

for(let i = 0; i < n; i++){
  let minX = 101;
  let maxX = 0;
  for(let j = 0; j < n; j++){
    if(j === i) continue;
    minX = Math.min(minX, x1[j]);
    maxX = Math.max(maxX, x2[j]);
  }
  mn = Math.min(mn, maxX - minX);
}

console.log(mn);

