const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const lst = input[1].split(' ').map(Number);

console.log(lst.filter((e) => e < x).join(' '))