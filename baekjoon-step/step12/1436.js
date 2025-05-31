let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let i = 666;

while(true){
  let s = i.toString();
  for(let i = 0; i < s.length - 2; i++){
    if(s[i] === '6' && s[i] === s[i + 1] && s[i + 1] === s[i + 2]){
      n--;
      break;
    }
  }
  if(n === 0) break;
  i++;
}

console.log(i);