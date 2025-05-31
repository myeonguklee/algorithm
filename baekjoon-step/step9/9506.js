const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

for(let i = 0; i < input.length - 1; i++){
  let sm = 0;
  const res = [];
  for(let j = 1; j < input[i]; j++){
    if(input[i] % j === 0){
      sm += j;
      res.push(j);
    }
  }
  if(input[i] === sm) console.log(`${input[i]} = ${res.join(' + ')}`);
  else console.log(`${input[i]} is NOT perfect.`);
}