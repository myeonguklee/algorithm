const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = [];
for(let i = 1; i <= n; i++){
  arr.push(input[i].split(''));
}

let ret = 1e9;

for(let i = 0; i < n - 7; i++){
  for(let j = 0; j < m - 7; j++){
    let cnt1 = 0;
    let cnt2 = 0;
    for(let y = i; y < i + 8; y++){
      for(let x = j; x < j + 8; x++){
        if(!((y + x)%2) && arr[y][x] === 'B') cnt1++;
        if((y + x)%2 && arr[y][x] === 'W') cnt1++;
        if(!((y + x)%2) && arr[y][x] === 'W') cnt2++;
        if((y + x)%2 && arr[y][x] === 'B') cnt2++;
      }
    }
    ret = Math.min(ret, Math.min(cnt1, cnt2));
  }
}

console.log(ret);