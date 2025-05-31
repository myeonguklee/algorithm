const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let mn = 1e9;

for(let i = 1; i <= 10000; i++){
  let sm = 0;
  for(let j = 0; j < n; j++){
    if(arr[j] < i) sm+=(i - arr[j]);
    else if(arr[j] > i + k) sm+=(arr[j] - (i + k));
  }
  mn = Math.min(mn, sm);
}

console.log(mn);