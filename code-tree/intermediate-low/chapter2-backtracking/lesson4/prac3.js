const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const cost = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const visited = Array(n).fill(0);
let mn = 1e9;

function go(idx, cnt, sm) {
  if(cnt === n - 1) {
    if(cost[idx][0]){
      mn = Math.min(mn, sm + cost[idx][0]);
    }
    return;
  }

  for(let i = 1; i < n; i++) {
    if(visited[i]) continue;
    if(!cost[idx][i]) continue;

    visited[i] = 1;
    go(i, cnt + 1, sm + cost[idx][i]);
    visited[i] = 0;
  }

}

go(0, 0, 0);

console.log(mn);