const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);

// Please Write your code here.

const answer = [];
const selected = [];

function go(idx) {
  if(idx === n) {
    answer.push(selected.join(' '))
    return;
  }

  for(let i = 1; i <= k; i++) {
    if(idx >= 2 && (selected[idx - 2] === selected[idx -1]) && (selected[idx - 1] === i)) continue;
    selected.push(i);
    go(idx + 1);
    selected.pop();
  }
}

go(0);

console.log(answer.join('\n'));