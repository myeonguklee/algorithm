const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];

const st = new Set();
let cnt = 0;

for(let i = 1; i <= n; i++){
  if(input[i] === 'ENTER'){
    cnt += st.size;
    st.clear()
  }else{
    st.add(input[i]);
  }
}

cnt += st.size;

console.log(cnt);