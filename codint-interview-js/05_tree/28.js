// 예상 대진표
// https://school.programmers.co.kr/learn/courses/30/lessons/12985#

function solution(n,a,b) {

  function next(curr){
    if(curr % 2 === 0) return curr / 2;
    else return (curr + 1) / 2;
  }

  let cnt = 1;

  while(true) {
    const nextA = next(a);
    const nextB = next(b);
    if(nextA === nextB) break;
    a = nextA;
    b = nextB;
    cnt++;
  }

  return cnt;
}