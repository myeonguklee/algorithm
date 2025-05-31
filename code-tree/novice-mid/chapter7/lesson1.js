const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input.shift().split(' ').map(Number);
const pArr = [];
const sArr = [];
for (let i = 0; i < n; i++) {
  const [p, s] = input[i].split(' ').map(Number);
  pArr.push(p);
  sArr.push(s);
}

// Please Write your code here.

// const a = input.map((line) => line.split(' ').map(Number));
let res = -1e9;

for(let i = 0; i < n; i++){
  const pTemp = [...pArr];
  const sTemp = [...sArr];
  pTemp[i] /= 2;

  const arr = [];
  for(let k = 0; k < n; k++){
    arr.push(pTemp[k] + sTemp[k]);
  }
  arr.sort((a, b) => a - b);

  let sm = 0;
  let cnt = 0;

  for(let j = 0; j < n; j++){
    sm += arr[j];
    if(sm <= b) cnt++;
    else break;
  }
  res = Math.max(res, cnt);
}

console.log(res);
