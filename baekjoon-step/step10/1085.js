const[x, y, w, h] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const res = [x, w-x, y, h-y];

console.log(Math.min(...res));