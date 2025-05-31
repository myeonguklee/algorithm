const [a, b] = require('fs').readFileSync('input.txt').toString().trim().split(' ').map(Number);

const gcd = (a, b)=>{
  while(b !== 0){
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const g = gcd(a, b);

console.log(a * b / g);