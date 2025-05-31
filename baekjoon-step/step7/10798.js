const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = Array(15).fill().map(() => Array(15).fill(-1));

for(let i = 0; i < input.length; i++){
  for(let j = 0; j < input[i].length; j ++){
    arr[i][j] = input[i][j];
  }
}

let res = "";

for(let i = 0; i < 15; i++){
  for(let j = 0; j < 15; j++){
    if(arr[j][i] === -1) continue;
    res += arr[j][i];
  }
}

console.log(res);

// 참고할 만한 코드
// https://www.acmicpc.net/source/84346366
// https://www.acmicpc.net/source/84333696