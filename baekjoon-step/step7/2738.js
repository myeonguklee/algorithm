const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

arr1 = [];
arr2 = [];

for(let i = 1; i <= n; i++){
  arr1.push(input[i].split(' ').map(Number));
  arr2.push(input[i + n].split(' ').map(Number));
}

for(let i = 0; i < n; i++){
  let ret = [];
  for(let j = 0; j < m; j++){
    ret.push(arr1[i][j] + arr2[i][j]);
  }
  console.log(ret.join(' '));
}