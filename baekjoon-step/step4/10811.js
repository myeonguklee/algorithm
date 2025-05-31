const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const arr = Array(n).fill(1).map((v, i) => v + i);

for(let i = 1; i <= m; i++){
  const [s, e] = input[i].split(' ').map(Number);
  const temp = arr.slice(s-1, e).reverse();
  arr.splice(s-1, e - s + 1, ...temp);
}

console.log(arr.join(' '));