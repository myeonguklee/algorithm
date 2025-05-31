const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let ret = 1e9;

for(let i = 0; 5 * i <= n; i++){
  for(let j = 0; 5 * i + 3 * j <=n; j++){
    if(5 * i + 3 * j === n){
      ret = Math.min(ret, (i + j));
    }
  }
}
console.log(ret === 1e9 ? -1 : ret);