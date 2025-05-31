const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

arr.sort((a, b) => a - b);

if(arr[0] + arr[1] + arr[2] === 180){
  if(arr[0] === arr[1] && arr[1] === arr[2]) console.log('Equilateral');
  else if(arr[0] === arr[1] || arr[1] === arr[2]) console.log('Isosceles');
  else console.log('Scalene');
} else console.log('Error');