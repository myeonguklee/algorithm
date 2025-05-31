const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [t, ...nums] = input;

for(let i = 0; i < Number(t); i++){
  const[a, b] = nums[i].split(' ').map(Number);
  console.log(`Case #${i + 1}: ${a} + ${b} = ${a + b}`);
}