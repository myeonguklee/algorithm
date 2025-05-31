function check(y, x){
  for(let i = 0; i < s.length; i++){
    if(s[i][0] === y || s[i][1] === x || s[i][0] + s[i][1] === y + x || s[i][0] - s[i][1] === y - x) return false;
  }
  return true;
}

function go(idx, n){
  if(idx === n){
    cnt++;
    return;
  }
  for(let j = 0; j < n; j++){
    if(check(idx, j)){
      s.push([idx, j]);
      go(idx + 1, n);
      s.pop();
    }
  }
}

const n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'));

const s = [];
let cnt = 0;

go(0, n);
console.log(cnt);