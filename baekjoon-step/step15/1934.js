const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = parseInt(input[0]);

const gcd = (a, b) => {
  while(b !== 0){
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

for(let i = 1; i <= t; i++){
  let[a, b] = input[i].split(' ').map(Number);
  const g = gcd(a, b);
  console.log(a * b / g);
}
