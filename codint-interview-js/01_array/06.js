// https://school.programmers.co.kr/learn/courses/30/lessons/42889
// 실패율

function solution(N, stages) {
  var answer = [];

  let n = stages.length;

  for(let i = 1; i < N + 1; i++){
    let cnt = 0;
    for(let j = 0; j < stages.length; j++) {
      if(i === stages[j]) cnt++;
    }
    if(cnt === 0) answer.push([0, i]);
    else {
      answer.push([cnt/n, i]);
      n -= cnt;
    }
  }

  answer.sort((a, b) => {
    if(a[0] === b[0]){
      return a[1] - b[1];
    }else{
      return (a[0] - b[0]) * -1;
    }
  })

  const ret = answer.map((x) => x[1]);

  return ret;
}