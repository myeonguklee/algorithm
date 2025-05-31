const [t, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const mx = Math.max(...arr);

const che = Array(mx + 1).fill(0);
for(let i = 2; i <= mx; i++){
  if(che[i]) continue;
  for(let j = i * 2; j <= mx; j+=i){
    che[j] = 1;
  }
}

const prime = [];
for(let i = 2; i < mx + 1; i++){
  if(che[i] === 0) prime.push(i);
}

for(let i = 0; i < t; i++){
  const n = arr[i];

  let cnt = 0;
  let l = 0;
  let r = prime.length-1;

  while(l <= r){
    if(prime[l] + prime[r] === n) cnt++;
    if(prime[l] + prime[r] >= n) r--;
    if(prime[l] + prime[r] < n) l++;
  }
  console.log(cnt);
}

// 골드바흐의 추측에 따라 짝수는 두 소수의 합으로 표현 가능
// 소수 합 개수를 직접 세는 함수
// function countPrimePairs(n) {
//   if(n <= 3) return 0;
//
//   let count = 0;
//   for(let i = 2; i <= n/2; i++) {
//     if(che[i] === 0 && che[n-i] === 0) {
//       count++;
//     }
//   }
//   return count;
// }
//
// for(let i = 0; i < t; i++){
//   console.log(countPrimePairs(arr[i]));
// }