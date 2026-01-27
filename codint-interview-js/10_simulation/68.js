// https://school.programmers.co.kr/learn/courses/30/lessons/12980
// 점프와 순간 이동

function solution(n) {
  let cnt = 0;
  let idx = n;

  while(idx !== 0){
    if(idx % 2 === 0) idx /= 2;
    else {
      idx -=1;
      cnt++;
    }
  }

  return cnt;
}