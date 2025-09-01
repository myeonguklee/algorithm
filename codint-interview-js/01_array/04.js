// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 모의고사

function solution(answers) {
  var answer = [];

  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let cnt1 = 0, cnt2 = 0, cnt3 = 0;

  for(let i = 0; i < answers.length; i++){
    if(answers[i] === arr1[i % 5]) cnt1++;
    if(answers[i] === arr2[i % 8]) cnt2++;
    if(answers[i] === arr3[i % 10]) cnt3++;
  }

  const arr = [cnt1, cnt2, cnt3];

  const mx = Math.max(...arr);

  for(let i = 0; i < 3; i++){
    if(arr[i] === mx) answer.push(i + 1);
  }

  return answer;
}

// entries()