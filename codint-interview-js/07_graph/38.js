const graph = [['A', 'B'], ['A', 'C'], ['B', 'C']]
const start = 'A'

function solution (graph, start) {
  const adj = {};

  for(const [s, e] of graph) {
    if(!adj[s]) adj[s] = [];
    adj[s].push(e);
  }

  const visited = new Set();
  const answer = [];

  function dfs(idx){
    answer.push(idx);
    visited.add(idx);

    if(!adj[idx]) return;

    for(const next of adj[idx]){
      if(visited.has(next)) continue;
      dfs(next);
    }
  }

  dfs(start)

  return answer;

}

// 반환값 : ['A', 'B', 'C', 'D', 'E']
console.log(solution([['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E']], 'A'))

// 반환값 : ['A', 'B', 'D', 'E', 'F', 'C']
console.log(solution([['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['E', 'F']], 'A'))