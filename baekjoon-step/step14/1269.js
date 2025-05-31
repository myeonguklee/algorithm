const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n , m] = input[0].split(' ').map(Number);
const arr1 = input[1].split(' ')
const arr2 = input[2].split(' ')

const arr = [...arr1, ...arr2]

const mp = new Map();

for(let i = 0; i < n + m; i++){
  if(mp.has(arr[i])) mp.set(arr[i], mp.get(arr[i]) + 1);
  else mp.set(arr[i], 1);
}

let cnt = 0;

for(const[k, v] of mp){
  if(v === 1) cnt++;
}

console.log(cnt);