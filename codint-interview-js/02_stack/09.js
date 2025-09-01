function solution(decimal) {

  const stk = [];

  while(decimal > 0){
    stk.push(decimal % 2);
    decimal = Math.floor(decimal/2);
  }

  return stk.reverse().join('');
}