const n = parseInt(require('fs').readFileSync('dev/stdin').toString().trim());

console.log(2**n);