const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const st = new Set();
const mp = new Map();

for(let i = 1; i <= n; i++){
  if(input[i].length >= m){
    st.add(input[i]);
    if(mp.has(input[i])) mp.set(input[i], mp.get(input[i]) + 1);
    else mp.set(input[i], 1);
  }
}

const arr = [...st];

arr.sort((a, b) =>{
  if(mp.get(a) !== mp.get(b)) return (mp.get(a) - mp.get(b)) * -1;
  else if(a.length !== b.length) return (a.length - b.length) * - 1;
  else{
    for(let i = 0; i < a.length; i++){
      if(a[i].charCodeAt() !== b[i].charCodeAt()) return a[i].charCodeAt() - b[i].charCodeAt();
    }
  }
})

console.log(arr.join('\n'));