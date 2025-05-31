const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

const res = [];

for(let i = 0; i < n; i++){
  if(i % 2 === 0){
    const a = arr.slice(0, i + 1);
    a.sort((a, b) => a - b);
    res.push(a[i/2]);
  };
}

console.log(res.join(' '));