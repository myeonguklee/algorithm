const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const arr = Array(30).fill(0);

for(let i = 0; i < 28; i++){
  arr[input[i] - 1] = 1;
}

for(let i = 0; i < 30; i++){
  if(arr[i] === 0) console.log(i+1);
}

// const array  = new Array(30).fill(false);
// for (let i = 0 ; i < input.length ; i++) {
//   array[input[i] - 1] = true;
// }
// const a = array.indexOf(false);
// const b = array.lastIndexOf(false);
// console.log(Math.min(a, b) + 1,);
// console.log(Math.max(a, b) + 1);