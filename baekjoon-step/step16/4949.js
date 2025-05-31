const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length - 1; i++){
  const stk = [];
  let check = true;

  for(let c of input[i]){
    if(c === ')'){
      if(stk.length === 0 || stk[stk.length - 1] === '['){
        check = false;
        break;
      } else stk.pop();
    }
    if(c === ']'){
      if(stk.length === 0 || stk[stk.length - 1] === '('){
        check = false;
        break;
      } else stk.pop();
    }
    if(c === '(') stk.push('(');
    if(c === '[') stk.push('[');
  }
  if(check && stk.length === 0) console.log('yes');
  else console.log('no');
}