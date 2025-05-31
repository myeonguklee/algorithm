const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = input[0].split(" ").map(Number);

// Please Write your code here.

const n = arr.length;
const sm = arr.reduce((pre, cur) => pre + cur, 0);
let res = 1e9;

for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    for(let k = 0; k < n; k++){
      for(let l = 0; l < n; l++){
        if(i === j || i === k || i === l || j === k || j === l || k === l) continue;
        const sm1 = arr[i] + arr[j];
        const sm2 = arr[k] + arr[l];
        const sm3 = sm - sm1 - sm2;
        if(sm1 === sm2 || sm1 === sm3 || sm2 === sm3) continue;
        const mx = Math.max(sm1, sm2, sm3);
        const mn = Math.min(sm1, sm2, sm3);
        res = Math.min(res, mx - mn);
      }
    }
  }
}

console.log(res === 1e9 ? -1 : res);