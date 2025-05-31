const [a, b, v] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(Math.ceil((v - b) / (a - b)));

// 시간 초과
// let idx = 0;
// let day = 1;
// while(true){
//   idx += a;
//   if(idx >= v) break;
//   idx -= b;
//   day++;
// }
//
// console.log(day);
