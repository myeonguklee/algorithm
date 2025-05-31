const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.

function gcd(a, b){
  if(b === 0) return a;
  return gcd(b, a % b);
}

let ret = numbers[0];

for(let i = 1; i < n; i++){
  ret = ret * numbers[i] / gcd(ret, numbers[i]);
}

console.log(ret);
