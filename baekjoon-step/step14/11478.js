const s = require('fs').readFileSync('/dev/stdin').toString().trim();

const st = new Set();

for(let i = 1; i <= s.length; i++){
  for(let j = 0; j <= s.length - i; j++){
    st.add(s.slice(j, j+i));
  }
}

console.log(st.size);