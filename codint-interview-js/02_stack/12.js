// 주식 가격
// https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices) {

  const n = prices.length;
  const answer = Array(n).fill(0);
  const stk = [];

  for(let i = 0; i < n; i++){
    while(stk.length && prices[i] < prices[stk[stk.length - 1]]){
      const idx = stk.pop();
      answer[idx] = i - idx;
    }
    stk.push(i);
  }
  while(stk.length){
    const idx = stk.pop();
    answer[idx] = n - 1 - idx;
  }


  return answer;
}