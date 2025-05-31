const n = require('fs').readFileSync('/dev/stdin').toString().trim();

let ret = 0;

for(let i = 0; i <= +n; i++){
  let sm = i;
  for(let a of i.toString()){
    sm += +a;
  }
  if (sm === +n){
    ret = i;
    break;
  }
}

console.log(ret);