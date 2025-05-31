const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];

const st = new Set();
st.add('ChongChong');

for(let i = 1; i <= n; i++){
  const [a, b] = input[i].split(' ');
  if(st.has(a)) st.add(b);
  else if (st.has(b)) st.add(a);
}

console.log(st.size);