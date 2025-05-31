const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const n = Number(input[0]);
const lst = input[1].split(' ').map(Number);

let sm = 1000001;
let mx = -1000001;

for(let i of lst){
  sm = Math.min(sm, i);
  mx = Math.max(mx, i);
}

console.log(sm, mx);

// 최댓값과 최솟값 구조분해할당 활용
// console.log(Math.min(...lst), Math.max(...lst));