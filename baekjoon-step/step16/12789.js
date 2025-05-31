const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);

let cnt = 1;
const stk = [];

for(let i = 0; i < n; i++){
  if(cnt === arr[i]){
   cnt ++;
   while(stk.length > 0 && stk[stk.length - 1] === cnt){
     stk.pop();
     cnt ++;
   }
  }
  else stk.push(arr[i]);
}

if (cnt - 1 === n) console.log("Nice")
else console.log("Sad");