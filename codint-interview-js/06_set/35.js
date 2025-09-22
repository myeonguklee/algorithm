// https://school.programmers.co.kr/learn/courses/30/lessons/12981
// 영어 끝말잇기

function solution(n, words) {
  var answer = [];

  // 자신의 번호, 자신의 몇 번째 차례

  const st = new Set();
  let idx = 0;

  for(let i = 0; i < words.length; i++){
    if(st.has(words[i])){
      idx = i;
      break;
    }
    else{
      if(i !== 0){
        if(words[i - 1][words[i - 1].length - 1] !== words[i][0]){
          idx = i;
          break;
        }
      }

      st.add(words[i]);
    }
  }

  if(idx === 0) answer = [0, 0];
  else{
    answer.push((idx % n) + 1);
    answer.push(Math.floor(idx / n) + 1);
  }

  return answer;
}