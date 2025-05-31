const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const mp1 = new Map();
const mp2 = new Map();
for(let i = 1; i <= n; i++){
  mp1.set(input[i], i);
  mp2.set(i, input[i]);
}

for(let i = n + 1; i <= n + m; i++){
  const a = input[i][0].charCodeAt();
  if(a >= 65 && a <= 90) console.log(mp1.get(input[i]));
  else console.log(mp2.get(+input[i]));
}