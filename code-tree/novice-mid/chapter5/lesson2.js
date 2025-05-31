const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  B_moves.push([v, t]);
}

// Please Write your code here.

const a = [0];
const b = [0];

let idxA = 0;
let idxB = 0;

for(let i = 0; i < n; i++){
  const[v, t] = A_moves[i];
  for(let j = 0; j < t; j++){
    a.push(idxA += v);
  }
}

for(let i = 0; i < m; i++){
  const[v, t] = B_moves[i];
  for(let j = 0; j < t; j++){
    b.push(idxB += v);
  }
}

// 1 - a, 2 - b, 3 - ab
let flag = 0;
let res = 0;

for(let i = 1; i < a.length; i++){
  if(flag !== 1 && a[i] > b[i]){
    res++;
    flag = 1;
  }else if (flag !== 2 && a[i] < b[i]){
    res++;
    flag = 2;
  }else if (flag !== 3 && a[i] === b[i]){
    res++;
    flag = 3;
  }
}

console.log(res);
