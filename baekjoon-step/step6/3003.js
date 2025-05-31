const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const arr = [1, 1, 2, 2, 2, 8];
const ret = [];

for(let i = 0; i < input.length; i++){
  ret.push(arr[i] - input[i]);
}

console.log(ret.join(' '));