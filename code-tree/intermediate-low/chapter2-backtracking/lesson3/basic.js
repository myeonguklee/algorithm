const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

const answer = [];

const temp = [];

function go(idx, cnt) {
  if(cnt === m) {
    answer.push(temp.join(' '));
    return;
  }
  for(let i = idx; i <= n; i++) {
    temp.push(i);
    go(i + 1, cnt + 1);
    temp.pop();
  }
}

go(1, 0);

console.log(answer.join('\n'));
