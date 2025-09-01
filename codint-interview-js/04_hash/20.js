// 완주하지 못한 선수

// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  var answer = '';

  const mp = new Map();

  for(let i = 0; i < participant.length; i++){
    if(!mp.has(participant[i])) mp.set(participant[i], 1)
    else if(mp.get(participant[i]) > 0) mp.set(participant[i], mp.get(participant[i]) + 1);
  }

  for(let i = 0; i < completion.length; i++){
    if(mp.get(completion[i]) > 0) mp.set(completion[i], mp.get(completion[i]) - 1);
  }

  for(const[k, v] of mp){
    if(v === 1) answer = k;
  }

  return answer;
}