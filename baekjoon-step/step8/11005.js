const [n, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const res = n.toString(b).toUpperCase();
console.log(res);