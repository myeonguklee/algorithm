const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const dy = [0, 1];
const dx = [1, 0];

const memo = Array(n).fill().map(() => Array(n).fill(-1));

function go(y, x){
  if(memo[y][x] !== -1) return memo[y][x];

  if(y === n - 1 && x === n - 1){
    memo[y][x] = num[y][x];
    return num[y][x];
  }

  let cnt = 1e9;

  for(let d = 0; d < 2; d++){
    let ny = y + dy[d];
    let nx = x + dx[d];
    if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
    cnt = Math.min(cnt, Math.max(go(ny, nx), num[y][x]));
  }

  memo[y][x] = cnt;
  return cnt;
}

console.log(go(0, 0));

// Tabulation 으로 풀이시
// dp[i][j] = Math.max(Math.min(dp[i - 1][j], dp[i][j - 1]), num[i][j]);
// dp[i][j] = Math.min(Math.max(dp[i - 1][j], num[i][j]), Math.max(dp[i][j - 1], num[i][j]));
// 위에 두개 같은 결과