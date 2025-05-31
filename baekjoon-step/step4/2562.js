const fs = require('fs');

const lst = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const ret = Math.max(...lst);

console.log(ret);
console.log(lst.indexOf(ret) + 1);