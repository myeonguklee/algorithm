const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);

// Please Write your code here.

let mx = -1e9;
const temp = []

function go(idx) {
  if(temp.length === m) {
    // let sm = temp[0];
    // for(let i = 1; i < m; i++) {
    //     sm ^= temp[i];
    // }
    // mx = Math.max(mx, sm);
    const sm = temp.reduce((acc, cur) => acc ^ cur, 0);
    mx = Math.max(mx, sm);
    return;
  }
  for(let i = idx; i < n; i++) {
    temp.push(a[i]);
    go(i + 1);
    temp.pop();
  }
}

go(0);

console.log(mx);