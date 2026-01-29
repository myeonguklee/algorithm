// LIS 길이 계산하기

// const nums = [1, 4, 2, 3, 1, 5, 7, 3];
const nums = [3, 2, 1];

function solution(nums) {
  const n = nums.length;
  const dp = Array(n).fill(1);

  dp[0] = 1;

  for(let i = 1; i < n; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  return Math.max(...dp);
}

console.log(solution(nums));