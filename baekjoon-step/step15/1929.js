const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const res = [];

const isPrime = (n) => {
  if(n < 2) return false;
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) return false;
  }
  return true;
}

for(let i = a; i <= b; i++){
  if(isPrime(i)) res.push(i);
}

console.log(res.join('\n'));