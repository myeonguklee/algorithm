// 베스트앨범
// https://school.programmers.co.kr/learn/courses/30/lessons/42579#

function solution(genres, plays) {
  var answer = [];

  const n = genres.length;
  const order = {};

  for(let i = 0; i < n; i++){
    if(order[genres[i]]) order[genres[i]] += plays[i];
    else order[genres[i]] = plays[i];
  }

  const arr = Object.keys(order).sort((a, b) => (order[a] - order[b]) * -1);

  for(genre of arr){
    const temp = {};
    for(let i = 0; i < n; i++){
      if(genres[i] === genre) {
        temp[i] = plays[i];
      }
    }
    const tempArr = Object.keys(temp).sort((a, b) => {
      if(temp[a] === temp[b]) return Number(a) - Number(b);
      return (temp[b] - temp[a]);
    })
    if(tempArr.length === 1){
      answer.push(Number(tempArr[0]));
    }else{
      answer.push(Number(tempArr[0]));
      answer.push(Number(tempArr[1]));
    }
  }

  return answer;
}