const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let i = 0;
let res = 1;

while(true){
  res += 6 * i;
  if(n <= res) break;
  i++;
}

console.log(i + 1);
