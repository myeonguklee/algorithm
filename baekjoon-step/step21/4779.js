const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function go(s, e, res){
  if((e - s) === 1) return;
  for(let i = s + (e - s)/3; i < s + (e - s)/3*2; i++){
    res[i] = 0;
  }
  go(s, s + (e - s)/3, res);
  go(s + (e - s)/3*2, e, res);
}

for(let i = 0; i < arr.length; i++){
  const n = (3 ** arr[i]);
  const res = Array(n).fill(1);
  go(0, n, res);
  let ans = ""
  for(let i = 0; i < n; i++){
    if(res[i] === 1) ans+='-';
    else ans+=' ';
  }
  console.log(ans);
}