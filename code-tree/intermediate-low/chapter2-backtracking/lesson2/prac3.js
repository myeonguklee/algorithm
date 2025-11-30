const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

const temp = [];

function go(cnt) {
  for(let i = 1; i <= Math.floor(cnt / 2); i++) {
    if(cnt - i * 2 < 0) break;
    let flag = 1;
    for(let j = 0; j < i; j++) {
      if(temp[cnt - i * 2 + j] !== temp[cnt - i + j]) flag = 0;
    }
    if(flag) return;
  }

  if(cnt === n) {
    console.log(temp.join(''));
    process.exit(0);
    return;
  }
  for(let i = 4; i <= 6; i++) {
    temp.push(i);
    go(cnt + 1);
    temp.pop();
  }
}

go(0);