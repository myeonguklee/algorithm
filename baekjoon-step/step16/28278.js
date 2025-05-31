const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];

const stk = [];
const res = [];

for(let i = 1; i <= n; i++){
  const a = input[i].split(' ').map(Number);
  if(a[0] === 1) stk.push(a[1]);
  if(a[0] === 2){
    if(stk.length === 0) res.push(-1);
    else res.push(stk.pop());
  }
  if(a[0] === 3){
    res.push(stk.length);
  }
  if(a[0] === 4){
    if(stk.length === 0) res.push(1);
    else res.push(0);
  }
  if(a[0] === 5){
    if(stk.length === 0) res.push(-1);
    else res.push(stk[stk.length - 1]);
  }
}

console.log(res.join('\n'));

// 시간 초과 코드
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//
// const n = +input[0];
//
// const stk = [];
//
// for(let i = 1; i <= n; i++){
//   const a = input[i].split(' ').map(Number);
//   if(a[0] === 1) stk.push(a[1]);
//   if(a[0] === 2){
//     if(stk.length === 0) console.log(-1);
//     else console.log(stk.pop());
//   }
//   if(a[0] === 3){
//     console.log(stk.length);
//   }
//   if(a[0] === 4){
//     if(stk.length === 0) console.log(1);
//     else console.log(0);
//   }
//   if(a[0] === 5){
//     if(stk.length === 0) console.log(-1);
//     else console.log(stk[stk.length - 1]);
//   }
// }