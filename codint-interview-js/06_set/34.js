// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript
// 폰켓몬

function solution(nums) {
  var answer = 0;

  const n = nums.length;

  const numSet = new Set(nums);

  answer = Math.min(n/2, numSet.size);

  return answer;
}