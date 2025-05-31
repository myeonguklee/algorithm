const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const word = input.toUpperCase();
const arr = Array(26).fill(0);

for(let i = 0; i < word.length; i++){
  arr[(word[i].charCodeAt() - 65)] ++;
}

const mx = Math.max(...arr);
const ret = [];

for(let i = 0; i < 26; i++){
  if(arr[i] === mx) ret.push(String.fromCharCode(i + 65));
}

console.log(ret.length > 1 ? '?' : ret[0]);