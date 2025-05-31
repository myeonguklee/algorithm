const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let ret = 0;

for(let i = 1; i <= n; i++){
  const word = input[i];
  const m = Number(word.length);

  const arr = Array(26).fill(0);
  let prev = '';
  let flag = 1;

  for(let j = 0; j < m; j++){
    if(prev === word[j]) continue;
    else if(arr[word[j].charCodeAt() - 97]) flag = 0;
    prev = word[j]
    arr[word[j].charCodeAt() - 97] = 1;
  }
  if(flag) ret++;
}

console.log(ret);

// 아래 풀이는 이미 나온 단어가 제일 최근에 push한 단어가 아니면 카운트 제외!
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//
// const caseCount = Number(input[0]);
// let countGroupWord = 0;
//
// for (let i = 1; i <= caseCount; i++) {
//   const word = input[i];
//   const letter = [];
//   let isGroupWord = true;
//
//   for (let j = 0; j < word.length; j++) {
//     if (letter.indexOf(word[j]) === -1) {
//       letter.push(word[j]);
//     } else {
//       if (letter.indexOf(word[j]) !== letter.length - 1) {
//         isGroupWord = false;
//         break;
//       }
//     }
//   }
//
//   if (isGroupWord) {
//     countGroupWord += 1;
//   }
// }
//
// console.log(countGroupWord);