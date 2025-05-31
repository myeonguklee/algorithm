const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const mx = Math.max(...arr);

let sm = 0;

for(let i = 0; i < arr.length; i++){
  sm += arr[i]/mx*100;
}

console.log(sm/arr.length);