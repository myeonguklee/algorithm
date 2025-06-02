const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr = input[0].split('');
// Plearrse Write your code here.

const n = arr.length;
let mn = 1e9;

for(let i = 0; i < n; i++){
  const temp = arr[n - 1];
  for(let j = n - 1; j > 0; j--){
    arr[j] = arr[j - 1];
  }
  arr[0] = temp;

  let pre = arr[0]
  let cnt = 1;
  let s = "";

  for(let k = 1; k < n; k++){
    if(pre === arr[k]){
      cnt ++;
    }else{
      s += (pre + cnt.toString());
      pre = arr[k];
      cnt = 1;
    }
  }
  s += (pre + cnt.toString());

  mn = Math.min(mn, s.length);
}

console.log(mn);