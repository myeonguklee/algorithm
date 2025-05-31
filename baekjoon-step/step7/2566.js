const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = [];
for(let i = 0; i < 9; i++){
  arr.push(input[i].split(' ').map(Number));
}

let ret = -1e9;
let y, x;

for(let i = 0; i < 9; i++){
  for(let j = 0; j < 9; j++){
    if(ret < arr[i][j]){
      ret = arr[i][j];
      y = i + 1;
      x = j + 1;
    }
  }
}

console.log(ret);
console.log(y, x);