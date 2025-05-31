const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);

for(let i = 1; i <= t; i++){
  let ret = "";
  const [r, word] = input[i].split(' ');
  for(let j = 0; j < word.length; j++){
    for(let k = 0; k < Number(r); k++){
      ret += word[j];
    }
  }
  console.log(ret);
}