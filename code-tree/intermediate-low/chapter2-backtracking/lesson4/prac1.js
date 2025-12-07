const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const visited = Array(n + 1).fill(0);
const temp = [];
const answer = [];

function go(cnt) {
  if(cnt === n) {
    answer.push(temp.join(' '));
    return;
  }
  for(let i = 1; i <= n; i++) {
    if(visited[i]) continue;

    visited[i] = 1;
    temp.push(i);

    go(cnt + 1);

    visited[i] = 0;
    temp.pop();
  }
}

go(0);

console.log(answer.reverse().join('\n'));
