// 할인 행사
// https://school.programmers.co.kr/learn/courses/30/lessons/131127

// 0 초기화 조심

function solution(want, number, discount) {
  var answer = 0;

  const wantObj = {};
  const disObj = {};

  for(let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  let cnt = 0;

  for(let i = 0; i < 10; i++){
    if(disObj[discount[i]]) disObj[discount[i]]++;
    else disObj[discount[i]] = 1;
  }

  let flag = 1;

  for(key in wantObj){
    if(wantObj[key] <= disObj[key]) continue;
    else {
      flag = 0;
      break;
    };
  }

  if(flag) cnt++;

  for(let i = 10; i < discount.length; i++){
    disObj[discount[i - 10]]--;
    if(disObj[discount[i]]) disObj[discount[i]]++;
    else disObj[discount[i]] = 1;

    let flag = 1;

    for(key in wantObj){
      if(wantObj[key] <= disObj[key]) continue;
      else {
        flag = 0;
        break;
      };
    }

    if(flag) cnt++;
  }

  answer = cnt;

  return answer;
}