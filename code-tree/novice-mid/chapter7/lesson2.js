const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

// Please Write your code here.

let cnt = 0;

for(let i = x; i <= y; i++){
  const arr = [...i.toString()]
  const rArr = [...arr].reverse();
  if(arr.toString() === rArr.toString()) cnt++;
}

console.log(cnt);