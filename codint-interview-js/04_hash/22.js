// 오픈채팅방

// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {

  const nickname = {};
  const result = [];

  for(let i = 0; i < record.length; i++){
    const arr = record[i].split(' ');
    if(arr[0] === "Enter"){
      result.push([arr[1], "Enter"])
      nickname[arr[1]] = arr[2];
    }else if (arr[0] === "Leave"){
      result.push([arr[1], "Leave"])
    }else if (arr[0] === "Change"){
      nickname[arr[1]] = arr[2];
    }

  }

  const answer = result.map((res) => {
    const [id, action] = res;
    if(action === "Enter") return `${nickname[id]}님이 들어왔습니다.`
    else return `${nickname[id]}님이 나갔습니다.`
  })

  return answer;
}