const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

let ret = 0;

for(let i = 0; i < input.length; i++){
  const a = input[i].charCodeAt() - 65;
  if(a < 3) ret += 3;
  else if(a < 6) ret += 4;
  else if(a < 9) ret += 5;
  else if(a < 12) ret += 6;
  else if(a < 15) ret += 7;
  else if(a < 19) ret += 8;
  else if(a < 22) ret += 9;
  else if(a < 26) ret += 10;
}

console.log(ret);


// 오답 : 갑자기 4개씩 묶여있음

// 대문자 아스키 코드로 바꾸기
// -> A 가 0 이 되도록 변환(-65)
// -> 다이얼에 맞게 그룹 나누기(/3 +2)
// -> 전화 거는 시간 (+1)
// for(let i = 0; i < input.length; i++){
//   ret += Math.floor((input[i].charCodeAt() - 65)/3) + 3;
// }
