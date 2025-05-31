const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr = [];

const gcd = (a, b) => {
  while(b !== 0){
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

for(let i = 1; i < n; i++){
  arr.push(input[i + 1] - input[i]);
}

let g = arr[0];
for(let i = 1; i < n - 1; i++){
  g = gcd(g, arr[i])
}

let res = 0;
for(let i = 0; i < n - 1; i++){
  res += (arr[i] / g) - 1;
}

console.log(res);
