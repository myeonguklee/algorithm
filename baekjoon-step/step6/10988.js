const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let res = 1;

for(let i = 0; i <= input.length / 2 - 1; i++){
  if(input[i] !== input[input.length - 1 - i]){
    res = 0;
    break;
  }
}

console.log(res);