const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = +input[0];

for(let i = 1; i <= t; i++){
  const stk = [];
  for(let a of input[i]){
    if(stk.length > 0 && a === ')' && stk[stk.length - 1] === '(') stk.pop();
    else stk.push(a);
  }
    if(stk.length === 0) console.log("YES");
    else console.log("NO");
}

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//
// const t = +input[0];
//
// for(let i = 1; i <= t; i++){
//   const stk = [];
//   let flag = false;
//   for(let a of input[i]){
//     if(a === '(') stk.push('(');
//     else{
//       if(stk.length > 0 && stk[stk.length - 1] === '(') stk.pop();
//       else{
//         console.log('NO');
//         flag = true;
//         break;
//       }
//     }
//   }
//   if(!flag){
//     if(stk.length === 0) console.log("YES");
//     else console.log("NO");
//   }
// }