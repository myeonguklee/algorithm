// 사각형 채우기 2

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const dp = Array(n + 1).fill(-1);

dp[0] = 1;
dp[1] = 1;

for(let i = 2; i <= n; i++){
  dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % 10_007;
}

console.log(dp[n]);