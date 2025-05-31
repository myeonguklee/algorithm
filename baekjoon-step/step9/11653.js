let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let m = 2;

while(n > 1){
  if(n % m !== 0)m++;
  else{
    n = n / m;
    console.log(m);
  }
}
