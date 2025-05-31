const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let arr = Array(26).fill(-1);

for(let i = 0; i < input.length; i++){
  const idx = input[i].charCodeAt() - 97
  if(arr[idx] === -1) arr[idx] = i;
}

console.log(arr.join(' '));