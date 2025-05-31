const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const s = new Set();

for(let i = 1; i <= n; i++){
  const [a, b] = input[i].split(' ');
  if(b === 'enter')s.add(a);
  else s.delete(a);
}

const arr = [...s];

console.log(arr.sort().reverse().join('\n'));