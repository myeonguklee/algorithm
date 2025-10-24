// 배달
// https://school.programmers.co.kr/learn/courses/30/lessons/12978

class PriorityQueue {
  constructor () {
    this.q = [];
  }

  size() {
    return this.q.length;
  }

  empty() {
    return this.q.length === 0;
  }

  push(item) {
    this.q.push(item);
    this.bubbleUp();
  }

  pop() {
    if(this.empty()) return null;
    const min = this.q[0];
    this.q[0] = this.q[this.size() - 1];
    this.q.pop();
    this.bubbleDown();
    return min
  }

  swap(a, b) {
    [this.q[a], this.q[b]] = [this.q[b], this.q[a]];
  }

  bubbleUp() {
    let idx = this.size() - 1;
    while(idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if(this.q[parentIdx] <= this.q[idx]) break;

      this.swap(parentIdx, idx);
      idx = parentIdx
    }
  }

  bubbleDown() {
    let idx = 0
    while(idx * 2 + 1 < this.size()){
      const leftChild = idx * 2 + 1;
      const rightChild = idx * 2 + 2;
      const smallerChild = rightChild < this.size() && this.q[rightChild] < this.q[leftChild]
        ? rightChild : leftChild

      if(this.q[smallerChild] >= this.q[idx]) break;

      this.swap(smallerChild, idx);
      idx = smallerChild
    }
  }
}

function solution(N, road, K) {

  const graph = Array(N + 1).fill().map(() => []);
  const distance = Array(N + 1).fill(Infinity);

  for(const[a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const pq = new PriorityQueue();

  distance[1] = 0;
  pq.push([0, 1])

  while(pq.size() > 0){
    const [dist, node] = pq.pop();
    for(const[next, nextDist] of graph[node]) {
      const cost = dist + nextDist
      if(distance[next] > cost) {
        distance[next] = cost;
        pq.push([cost, next])
      }
    }
  }


  return distance.filter((cost) => cost <= K).length;
}
