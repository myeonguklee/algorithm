const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let t = 0

while(true){
  const[a, b] = input[t].split(' ').map(Number);
  if(a === 0 && b === 0) break;
  console.log(a + b);
  t++;
}