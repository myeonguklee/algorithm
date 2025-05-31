const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const arrX = [];
const arrY = [];

for(let i = 0; i < input.length; i++){
  const[a, b] = input[i].split(' ').map(Number);

  arrX.push(a);
  arrY.push(b);
}
arrX.sort();
arrY.sort();

const x = (arrX[0] === arrX[1]) ? arrX[2] : arrX[0];
const y = (arrY[0] === arrY[1]) ? arrY[2] : arrY[0];

console.log(x, y);
