const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
let cnt = 0;

function go(s, l, r){
  cnt++;
  if(l >= r) return 1;
  if(s[l] !== s[r]) return 0;
  return go(s, l+1, r-1);
}

for(let i = 1; i <= n; i++){
  cnt = 0;
  console.log(`${go(input[i], 0, input[i].length - 1)} ${cnt}`);
}