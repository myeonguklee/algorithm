const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

arr.sort((a, b)=>a-b);
const sm = arr.reduce((acc, cur) => acc + cur, 0);

console.log(sm/5);
console.log(arr[2]);
