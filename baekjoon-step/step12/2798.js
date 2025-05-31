const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let ret = -1;
let sm = 0;

for(let i = 0; i < n; i++){
  for(let j = 0; j < i; j++){
    for(let k = 0; k < j; k++){
      sm = arr[i] + arr[j] + arr[k];
      if(sm <= m) ret = Math.max(ret, sm);
    }
  }
}

console.log(ret);