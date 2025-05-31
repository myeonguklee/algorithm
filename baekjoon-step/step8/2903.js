const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let ret = (2 ** n + 1) ** 2;
console.log(ret);