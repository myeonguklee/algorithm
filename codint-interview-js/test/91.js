// 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {

  let answer = 0;

  const cnt = Array(10).fill(0);

  for(n of numbers) {
    cnt[n] = 1;
  }

  for(let i = 0; i < 10; i++) {
    if(cnt[i]) continue;
    answer += i;
  }

  return answer;
}