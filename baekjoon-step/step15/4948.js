const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function isPrime(n) {
  if(n < 2) return false;
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) return false;
  }
  return true;
}

for(let i = 0; i < input.length - 1; i++){
  const a = input[i];
  let sm = 0;
  for(let j = a + 1; j <= 2 * a; j++){
    if(isPrime(j)) sm++;
  }
  console.log(sm);
}
