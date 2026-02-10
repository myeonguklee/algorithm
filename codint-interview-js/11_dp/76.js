// 땅따먹기
// https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {

  const n = land.length;

  const dp = Array(n).fill().map(() => Array(4).fill(0));

  for(let i = 0; i < 4; i++) {
    dp[0][i] = land[0][i];
  }

  for(let i = 1; i < n; i++) {
    for(let j = 0; j < 4; j++) {
      for(let k = 0; k < 4; k++) {
        if(j === k ) continue;
        dp[i][j] = Math.max(dp[i][j], land[i][j] + dp[i - 1][k]);
      }
    }
  }

  let answer = Math.max(...dp[n - 1]);

  return answer;
}