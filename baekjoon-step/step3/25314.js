const fs = require('fs');

const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

let result = [];

for(let i = 0; i < n/4; i++){
  result.push('long');
}
result.push('int');

console.log(result.join(' '));

// 참고할만한 풀이
// + 사용해 형변환
// https://www.acmicpc.net/source/83375348

// const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
// const num = +input[0];
//
// const count = Math.floor(num / 4);
//
// let text = "";
// for (let i = 0; i < count; i++) {
//   text += "long ";
// }
//
// console.log(`${text}int`);