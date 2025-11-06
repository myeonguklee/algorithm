const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);

// Please write your code here.

const answer = [];
const temp = [];

function go (cnt) {
  if(cnt === n){
    answer.push([...temp]);
    return;
  }
  for(let i = 1; i <= k; i++) {
    temp.push(i);
    go(cnt + 1);
    temp.pop();
  }
}

go(0);

answer.forEach((e) => console.log(e.join(' ')));
