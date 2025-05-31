const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const m = parseInt(input[0]);
const n = parseInt(input[1]);

const che = Array(n + 1).fill(0);

for(let i = 2; i <= n; i++){
  if(che[i]) continue;
  for(let j = i * 2; j <= n; j+= i){
    che[j] = 1;
  }
}
che[1] = 1;

const res = []
let sm = 0;

for(let i = m; i <= n; i++){
  if(che[i] === 0){
    res.push(i);
    sm += i
  }
}

if(res.length === 0) console.log(-1);
else{
  console.log(sm);
  console.log(res[0]);
}
