const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const res = new Set;

for(let i = 1; i <= a; i++){
  if(a % i === 0) res.add(i);
}

if(res.size < b) console.log(0);
else console.log([...res][b-1]);

// 배열에 push 해서 출력 가능 굳이 set 안써도 됨
// console.log(res[b - 1] ?? 0);