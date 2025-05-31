const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const mp = new Map();

for(let i = 1; i <= n+m; i++){
  if(mp.has(input[i])) mp.set(input[i], mp.get(input[i]) + 1);
  else mp.set(input[i], 1);
}

let cnt = 0;
const res = []

for(const[k, v] of mp){
  if(v === 2){
    cnt++;
    res.push(k);
  }
}
res.sort();

console.log(cnt);
console.log(res.join('\n'));