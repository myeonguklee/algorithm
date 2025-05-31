const n = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());

function go(n) {
  if(n === 1 || n === 0) return 1;
  return n * go(n - 1);
}

console.log(go(n));