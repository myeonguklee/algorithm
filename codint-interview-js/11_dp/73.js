// 피보나치 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {

  const fibo = Array(n + 1).fill(0);
  fibo[0] = 0;
  fibo[1] = 1;

  for(let i = 2; i <= n; i++) {
    fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567
  }

  return fibo[n];
}