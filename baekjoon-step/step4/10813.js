const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const lst = [];
for(let i = 1; i <= n; i++){
  lst.push(i);
}
// const lst = Array.from({ length: n }, (_, i) => i + 1);

for(let i = 1; i <= m; i++){
  let[a, b] = input[i].split(' ').map(Number);
  [lst[a-1], lst[b-1]] = [lst[b-1], lst[a-1]];
}

console.log(lst.join(' '));