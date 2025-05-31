const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let idx = 0;
let ret = 0;

while(idx < input.length){
  const a = input.slice(idx, idx+2);
  const b = input.slice(idx, idx+3);
  if(arr.includes(a)){
    ret++;
    idx+=2;
  }
  else if(arr.includes(b)){
    ret++;
    idx+=3;
  }
  else{
    ret++;
    idx+=1;
  }
}
console.log(ret);

// 크로아티아 문자열을 * 로 변환해서 length 계산

// for (const a of alpha) {
//   s = s.split(a).join("*");
// }

// slice 굳이 사용 안해도 되는 방법

// while (idx < input.length) {
//   // 3글자 크로아티아 알파벳 (dz=)인지 확인
//   if (input[idx] === 'd' && input[idx+1] === 'z' && input[idx+2] === '=') {
//     ret++;
//     idx += 3;
//   }
//   // 2글자 크로아티아 알파벳인지 확인
//   else if (arr.includes(input[idx] + input[idx+1])) {
//     ret++;
//     idx += 2;
//   }
//   // 일반 문자라면
//   else {
//     ret++;
//     idx += 1;
//   }
// }
//
// console.log(ret);