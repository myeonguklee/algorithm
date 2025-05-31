const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let arr = input[1].split(' ').map(Number);
const res = [... new Set(arr)];
res.sort((a, b) => a - b);

// 시간 초과
// console.log(arr.map(v => res.indexOf(v)).join(' '));

const mp = new Map();
res.forEach((v, i) => mp.set(v, i));

console.log(arr.map(v => mp.get(v)).join(' '));