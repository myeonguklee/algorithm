const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

arr.sort((a, b) => a - b);

let sm = 0;

if(arr[0] + arr[1] > arr[2]){
  sm += (arr[0] + arr[1] + arr[2]);
}else{
  sm += (arr[0] + arr[1]) * 2 - 1;
}

console.log(sm);