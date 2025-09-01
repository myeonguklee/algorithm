// 기능개발

// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  var answer = [];

  const arr = progresses.map((progress, idx) => Math.ceil((100 - progress)/speeds[idx]))

  let cnt = 1;
  let mx = arr[0]

  for(let i = 1; i < arr.length; i++){
    if(mx >= arr[i]) cnt++;
    else {
      answer.push(cnt);
      cnt = 1;
      mx = arr[i]
    }
  }

  answer.push(cnt);


  return answer;
}