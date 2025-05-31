const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const m = +input[2];

const arr1 = input[1].split(' ')
const arr2 = input[3].split(' ');

const mp = new Map();

for(let i = 0; i < n; i++){
  if(mp.has(arr1[i])) mp.set(arr1[i], mp.get(arr1[i]) + 1);
  else mp.set(arr1[i], 1);
}

let res = [];

for(let i = 0; i < m; i++){
  if(mp.has(arr2[i])) res.push(mp.get(arr2[i]));
  else res.push(0);
}

console.log(res.join(' '));