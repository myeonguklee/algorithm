const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

const gcd = (a, b) => {
  while(b!== 0){
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const g = gcd(b, d);
const lcm = b * d / g;

let x = (a * lcm / b) + (c * lcm / d);
let y = lcm;

const resG = gcd(x, y);

if (resG === 1) console.log(x, y);
else console.log(x/resG, y/resG);

