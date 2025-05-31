const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please write your code here.

// 양수 3개
// 음수 2개 양수 1개

arr.sort((a, b) => a - b);

const res = []

res.push(arr[0] * arr[1] * arr[n - 1]);
res.push(arr[n - 1] * arr[n - 2] * arr[n - 3]);

console.log(Math.max(...res));