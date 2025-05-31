const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const res = new Set(arr.map((x) => x % 42)).size;

console.log(res);