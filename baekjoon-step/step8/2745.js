const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const [n, b] = input.split(' ');
const m = Number(b);

let ret = 0;

for(let i = 0; i < n.length; i++){
  let a = n[n.length - 1 - i];
  if(a.charCodeAt() >= 65 && a.charCodeAt() <= 90) a = a.charCodeAt() - 55;
  else a = Number(a);
  ret += a * (m ** i);
}

console.log(ret);

// let ret = parseInt(n, Number(b))