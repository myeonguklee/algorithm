// 신고  결과 받기
// https://school.programmers.co.kr/learn/courses/30/lessons/92334
// solution: https://github.com/kciter/coding-interview-js/blob/main/solution/24.js

function solution(id_list, report, k) {
  var answer = [];

  const duplicate = new Set();
  const countObj = {};
  const reportObj = {};

  for(id of id_list){
    reportObj[id] = [];
  }

  for(let i = 0; i < report.length; i++){
    if(duplicate.has(report[i])) continue;
    else {
      duplicate.add(report[i])
      const [user, reportedUser] = report[i].split(' ');

      if(countObj[reportedUser]) countObj[reportedUser]++;
      else countObj[reportedUser] = 1;

      reportObj[user].push(reportedUser);
    }
  }

  for(let key in reportObj){
    let cnt = 0;
    for(user of reportObj[key]){
      if(countObj[user] >= k) cnt++;
    }
    answer.push(cnt);
  }

  return answer;
}