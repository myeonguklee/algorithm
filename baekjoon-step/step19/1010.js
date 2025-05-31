const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];

for(let i = 1; i <= t; i++){
  const [n, m] = input[i].split(' ').map(Number);
  let res = 1;

  for(let j = 1; j <= n; j++){
    res *= m + 1 - j;
    res /= j
  }
  console.log(res);
}