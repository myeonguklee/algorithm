// 메뉴 리뉴얼
// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  var answer = [];
  const comb = {};
  let temp = [];

  function go (order, n, idx) {
    if(temp.length === n){
      const menu = [...temp].sort().join('');
      comb[menu] = (comb[menu] || 0) + 1;
      return;
    }
    for(let i = idx; i < order.length; i++){
      temp.push(order[i]);
      go (order, n, i + 1);
      temp.pop();
    }
  }

  for(let order of orders) {
    for(let c of course) {
      if(order.length < c ) continue;
      temp = [];
      go(order, c, 0);
    }
  }

  for(let c of course) {
    let mx = -1e9;
    let mxMenu = [];
    for(let key in comb){
      if(key.length === c){
        if(comb[key] > mx){
          mx = comb[key];
          mxMenu = [key];
        }else if(comb[key] === mx){
          mxMenu.push(key);
        }
      }
    }
    if(mx > 1) answer.push(...mxMenu);
  }

  answer.sort();

  return answer;
}