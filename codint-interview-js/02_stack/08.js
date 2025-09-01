function solution (word) {
  const stk = [];
  let flag = 1;

  for(w of word) {
    if(w === '(') stk.push(w);
    else {
      if(stk.length && stk[stk.length - 1] === '(') stk.pop();
      else{
        flag = 0;
        break;
      }
    }
  }

  if(stk.length !== 0) flag = 0;

  if(flag) return 'True';
  else return 'False';

}