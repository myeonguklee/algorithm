const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

const [x, y] = input;
const stringY = y.toString();

// const a = Number(stringY[0]);
// const b = Number(stringY[1]);
// const c = Number(stringY[2]);
const [a, b, c] = stringY.split("").map(Number);

console.log(x * c);
console.log(x * b);
console.log(x * a);
console.log(x * y);

// 야무진 풀이
// https://www.acmicpc.net/source/82161641

// let fs = require('fs');
// let [A,B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//
// let num1 = parseInt(A);
// let num2 = B.split('').map(Number); //(3, 8, 5)
//
// let result = num2.reverse().map((x) => x*num1);
// result.push(num1*parseInt(B));
//
// console.log(result.join('\n'));