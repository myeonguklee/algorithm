const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

let answer = 0;
const temp = [];

function go(cnt) {
  if(cnt === n) {
    let idx = 0;
    while(idx < n) {
      if(idx + temp[idx] > n) return;

      for(let i = idx; i < idx + temp[idx]; i++){
        if(temp[idx] !== temp[i]) return;
      }
      idx += temp[idx];
    }
    answer++;
    return;
  }
  for(let i = 1; i <= 4; i++){
    temp.push(i);
    go(cnt + 1);
    temp.pop();
  }
}

go(0);

console.log(answer);
