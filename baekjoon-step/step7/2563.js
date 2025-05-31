const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = Array(100).fill().map(()=>Array(100).fill(0));

for(let t = 1; t <= Number(input[0]); t++){
  let [y, x] = input[t].split(' ').map(Number);
  y--; x--;
  for(let i = y; i < y + 10; i++){
    for(let j = x; j < x + 10; j++){
      arr[i][j] = 1;
    }
  }
}

let ret = 0;

for(let i = 0; i < 100; i++){
  for(let j = 0; j < 100; j++){
    if(arr[i][j]) ret++;
  }
}

console.log(ret);


// 색칠할때 넓이도 같이 세기
//https://www.acmicpc.net/source/82471800