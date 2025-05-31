const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const [n, ...arr] = input;
arr.sort((a, b) => a - b);

console.log(arr.join('\n'));
