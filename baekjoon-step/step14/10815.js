const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr1 = input[1].split(' ').map(Number);
const m = +input[2];
const arr2 = input[3].split(' ').map(Number);

// map이 조금 더 빠르네
// const mp = new Map();
// for(let i = 0; i < n; i++){
//   mp.set(arr1[i], 1);
// }

const s = new Set(arr1);

const res = [];

for(let i = 0; i < m; i++){
  if(s.has(arr2[i])) res.push(1);
  else res.push(0);
}

console.log(res.join(' '));