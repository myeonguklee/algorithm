// 특정 구간의 합

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.

function solve(s, e){
  let sm = 0;
  for(let i = s - 1; i < e; i++){
    sm += A[i];
  }
  console.log(sm);
}

for(let i = 0; i < m; i++){
  solve(queries[i][0], queries[i][1]);
}