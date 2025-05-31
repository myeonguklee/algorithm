const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);

const isPrime = (n) =>{
  if(n < 2) return false;
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) return false;
  }
  return true;
}

for(let i = 1; i <= t; i++){
  let n = +input[i];
  while(!isPrime(n)){
    n++;
  }
  console.log(n);
}