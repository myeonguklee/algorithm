const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const arr = [];

for(let i = 1; i <= n; i++){
  const [a, b] = input[i].split(' ').map(Number);
  arr.push([a, b]);
}

arr.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[1] - b[1];
});

for(let i = 0; i < n; i++){
  console.log(arr[i].join(' '));
}