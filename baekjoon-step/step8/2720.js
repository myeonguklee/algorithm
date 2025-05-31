const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let t = input[0];

const m = [25, 10, 5, 1];


for(let i = 1; i <= t; i++){
  let a = input[i];
  const res = Array(4).fill(0);

  for(let j = 0; j < 4; j++){
    res[j] = Math.floor(a / m[j]);
    a = a % m[j];
  }

  console.log(res.join(' '))
}

