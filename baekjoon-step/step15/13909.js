const n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());

let cnt =- 0;

for(let i = 1; i * i <= n; i++){
  cnt++;
}

console.log(cnt);