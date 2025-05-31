const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const s = new Set();
const arr = [];
for(let i = 1; i <= n; i++){
  s.add(input[i]);
}
for(let i = n + 1; i <= n + m; i++){
  arr.push(input[i]);
}

let cnt = 0;

for(let i = 0; i < m; i++){
  if(s.has(arr[i])) cnt++;
}

console.log(cnt);