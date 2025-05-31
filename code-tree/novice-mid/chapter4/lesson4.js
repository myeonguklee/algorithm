const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
  rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.


const MAX_N = 204;
const OFFSET = 100;

const a = Array(MAX_N).fill().map(() => Array(MAX_N).fill(0));

for(let t = 0; t < n; t++){
  let [x1, y1, x2, y2] = rectangles[t];
  x1+= OFFSET; y1 += OFFSET; x2 += OFFSET; y2 += OFFSET;
  for(let i = y1; i < y2; i++){
    for(let j = x1; j < x2; j++){
      if(t % 2 === 0) a[i][j] = 1;
      else a[i][j] = 2;
    }
  }
}

let res = 0;

for(let i = 0; i < MAX_N; i++){
  for(let j = 0; j < MAX_N; j++){
    if(a[i][j] === 2) res++;
  }
}

console.log(res);