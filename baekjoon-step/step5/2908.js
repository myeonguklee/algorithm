const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let [a, b] = input.split(' ');

let na = "";
let nb = "";

for(let i = 2; i >= 0; i--){
  na += a[i];
  nb += b[i];
}

na = Number(na);
nb = Number(nb);

if(na < nb) console.log(nb);
else console.log(na);

// 더 괜찮은 풀이 참고
// reverse string에서 사용 불가

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
//
// let a = input[0].split('').reverse().join('');
// let b = input[1].split('').reverse().join('');
//
// if (a > b)
//   console.log(a);
// else
//   console.log(b);
