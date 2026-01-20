// 이진 변환 반복하기
// https://school.programmers.co.kr/learn/courses/30/lessons/70129?language=javascript

// toString() (숫자 -> 특정 진수 문자열)
// const num = 4
// console.log(num.toString(2)) // "100"

// parseInt() (특정 진수 문자열 -> 10진수 숫자)
// console.log(parseInt("1111", 2)); // 15

function solution(s) {
  const answer = [];
  let zero_cnt = 0;
  let cnt = 0;

  let string = s;

  while(true){
    if(string === "1") break;

    let n = 0;
    let str = [];

    for(s of string){
      if(s === '0') zero_cnt++;
      else n++;
    }

    while(n >= 1){
      str.push(String(n % 2));
      n = Math.floor(n / 2);
    }
    string = str.reverse().join("");
    cnt++;
  }

  answer.push(cnt);
  answer.push(zero_cnt);

  return answer;
}
