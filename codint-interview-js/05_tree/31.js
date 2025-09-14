// 양과 늑대
// https://school.programmers.co.kr/learn/courses/30/lessons/92343

function solution(info, edges) {
  let answer = -1e9;

  const tree = Array(info.length).fill().map(() => []);

  for(const [p, c] of edges){
    tree[p].push(c);
  }

  function dfs (sheep, wolf, curr, nextArr) {
    answer = Math.max(answer, sheep);

    for(const next of nextArr){
      const newSheep = info[next] === 0 ? sheep + 1 : sheep;
      const newWolf = info[next] === 1 ? wolf + 1 : wolf;
      if(sheep > wolf) dfs(newSheep, newWolf, next, [...nextArr.filter(x => x !== next), ...tree[next]])
    }
  }

  dfs(1, 0, 0, tree[0]);


  return answer;
}