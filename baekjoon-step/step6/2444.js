const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

for(let i = 1; i < n * 2; i+=2){
  const m = Math.floor((2*n - 1 - i)/2)
  console.log(' '.repeat(m) + '*'.repeat(i));
}
for(let i = (n - 1) * 2 - 1; i >=1; i-=2){
  const m = Math.floor((2*n - 1 - i)/2)
  console.log(' '.repeat(m) + '*'.repeat(i));
}