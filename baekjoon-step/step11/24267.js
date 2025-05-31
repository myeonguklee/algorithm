const n = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());

const res = n * (n - BigInt(1)) * (n - BigInt(2)) / BigInt(6);

console.log(res + "");
console.log(3);