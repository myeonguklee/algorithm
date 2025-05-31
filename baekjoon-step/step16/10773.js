const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const k = +input[0];

const stk = [];

for(let i = 1; i <= k; i++){
  if(input[i] === 0) stk.pop();
  else stk.push(input[i]);
}

console.log(stk.reduce((acc, cur) => acc + cur, 0));