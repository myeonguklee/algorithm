const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

grade = {
  "A+": 4.5,
  "A0": 4.0,
  "B+": 3.5,
  "B0": 3.0,
  "C+": 2.5,
  "C0": 2.0,
  "D+": 1.5,
  "D0": 1.0,
  "F": 0.0,
}

let sm = 0;
let cnt = 0;

for(let i = 0; i < input.length; i++){
  const[a, b, c] = input[i].split(' ');
  if(c === "P") continue;
  sm += grade[c] * Number(b);
  cnt += Number(b);
}

console.log(sm/cnt);