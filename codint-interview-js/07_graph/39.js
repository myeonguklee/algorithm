class Queue {
  constructor () {
    this.q = [];
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    this.q.push(item);
    this.tail++;
  }

  empty() {
    return this.head === this.tail;
  }

  size() {
    return this.tail - this.head
  }

  pop() {
    if(!this.empty()) {
      return this.q[this.head++];
    }
  }
}

function solution(graph, start) {
  const answer = [];
  const adj = {};
  const visited = new Set();
  const q = new Queue();

  graph.forEach(([v, e]) => {
    if(!adj[v]) adj[v] = [];
    adj[v].push(e);
  })

  q.push(start);
  visited.add(start);

  while(q.size()){
    const curr = q.pop();
    answer.push(curr);

    (adj[curr] || []).forEach(next => {
      if(!visited.has(next)) {
        q.push(next);
        visited.add(next);
      }
    })
  }

  return answer
}


// 반환값 :[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(solution([[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7], [4, 8], [5, 8], [6, 9], [7, 9]], 1))
// 반환값 : [1, 2, 3, 4, 5, 0]
console.log(solution([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], 1))