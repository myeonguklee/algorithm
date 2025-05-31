const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const arr = [];

for(let i = 1; i <= n; i++){
  const [a, b] = input[i].split(' ')
  arr.push([+a, b]);
}

arr.sort((a, b) => a[0] - b[0]);

for(let i = 0; i < n; i++){
  console.log(arr[i].join(' '));
}

// console.log(arr.map((x) => x.join(' ')).join('\n'));