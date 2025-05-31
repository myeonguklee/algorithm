const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please write your code here.

arr.sort((a, b) => a - b);

let mn = 1e9;

for(let i = 0; i < n; i++){
  mn = Math.min(mn, arr[i + n] - arr[i]);
}

console.log(mn);