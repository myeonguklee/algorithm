const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

let num = 0;

for(let i = 0; i < n.length; i++){
  num = num * a + parseInt(n[i]);
}

const res = [];

while(true){
  if(num < b){
    res.push(num);
    break;
  }
  res.push(num % b);
  num = parseInt(num / b);
}

console.log(res.reverse().join(''));