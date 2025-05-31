const[n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const a = [];
const res = [];

function go (idx, n, m){
  if(a.length === m){
    res.push(a.join(' '));
    return
  }
  for(let i = idx; i <= n; i++){
    a.push(i);
    go(i, n, m);
    a.pop();
  }
}

go(1, n, m);
console.log(res.join('\n'));