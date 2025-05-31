const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const lst = Array(n).fill(0);

for(let i = 1; i <= m; i++){
  let[s, e, v] = input[i].split(' ').map(Number);
  // arr.fill(v, s - 1, e);
  for(let j = s - 1; j <= e - 1; j++){
    lst[j] = v;
  }
}

console.log(lst.join(' '));