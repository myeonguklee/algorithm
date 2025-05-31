const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];

const cnt = Array(8001).fill(0);
const arr = [];
let sm = 0;

for(let i = 1; i <= n; i++){
  arr.push(+input[i]);
  sm += +input[i];
  cnt[+input[i] + 4_000] += 1;
}

const mx = Math.max(...cnt);
const mxArr = [];
let idx = cnt.indexOf(mx);
while(idx !== -1){
  mxArr.push(idx - 4_000);
  idx = cnt.indexOf(mx, idx + 1);
}

arr.sort((a, b) => a - b);

console.log(Math.round(sm / n) === -0 ? 0 : Math.round(sm / n));
console.log(arr[(n- 1)/2]);
console.log(mxArr.length > 1 ? mxArr[1] : mxArr[0]);
console.log(arr[n - 1] - arr[0]);
