// https://school.programmers.co.kr/learn/courses/30/lessons/76502
// 괄호회전하기

function solution(s) {
  let answer = 0;
  const left = ['(', '[', '{'];
  const right = [')', ']', '}'];

  const n = s.length

  for(let i = 0; i < n; i++) {
    const stk = [];
    let flag = 1;
    for(let j = 0; j < n; j++) {
      const c = s[(i + j) % n];

      if(left.includes(c)) stk.push(c);
      else{
        if(stk.length === 0) {
          flag = 0;
          break;
        }
        else{
          if((c === ')' && stk[stk.length - 1] === '(') ||
            (c === ']' && stk[stk.length - 1] === '[') ||
            (c === '}' && stk[stk.length - 1] === '{') ) stk.pop();
        }
      }
    }
    if(flag && stk.length === 0) answer++;
  }

  return answer;
}