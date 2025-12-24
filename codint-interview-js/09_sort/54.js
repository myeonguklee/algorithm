// 계수 정렬 구현하기

// const strings =  'hello'
const strings =  'algorithmz'

function solution(strings) {
  const arr = Array(26).fill(0);

  for(let s of strings) {
    arr[s.charCodeAt() - 97]++;
  }

  let res = '';

  for(let i = 0; i < 26; i++) {
    if(arr[i]){
      for(let j = 0; j < arr[i]; j++){
        res += String.fromCharCode(i + 97)
      }
    }
  }

  return res;
}

console.log(solution(strings));

// repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
"abc".repeat(2) // "abcabc"