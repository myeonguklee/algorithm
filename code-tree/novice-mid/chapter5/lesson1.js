const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let cnt = 0;
let mx = 0;

for(let i = 0; i < n; i++){
  if(i > 0 && arr[i] > t) cnt++;
  else {
    if(arr[i] > t) cnt = 1;
    else cnt = 0;
  }
  mx = Math.max(mx, cnt);
}

console.log(mx);