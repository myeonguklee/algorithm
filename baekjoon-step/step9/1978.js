const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);
nums.sort((a, b) => a - b)
const res = Array(nums[n - 1] + 1).fill(0);

// 소수 체크용 배열
for(let i = 2; i <= nums[n-1]; i++){
  if(res[i]) continue;
  for(let j = i * 2; j <= nums[n-1]; j+= i){
    res[j] = 1;
  }
}
res[1] = 1;

let result = 0;
for(let i = 0; i < n; i++){
  if(!res[nums[i]]) result++;
}

console.log(result);