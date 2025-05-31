const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = [];

for(let i = 0; i < input.length; i++){
  arr.push(input[i]);
}

arr.sort((a, b) => (a - b) * -1);

console.log(arr.join(''));