// 짝지어 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s)
{
  let answer = 1;

  const stk = [];

  for(c of s){
    if(stk.length && stk[stk.length-1] === c) stk.pop();
    else stk.push(c);
  }

  if(stk.length !== 0) answer = 0;

  return answer;
}