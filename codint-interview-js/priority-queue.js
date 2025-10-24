class PriorityQueue {
  constructor() {
    this.q = [];
  }

  push(value, priority) {
    this.q.push({value, priority});
    this.sort();
  }

  pop() {
    return this.queue.shift().value;
  }

  sort() {
    this.q.sort((a, b) => a.priority - b.priority);
  }
}

// 위처럼 sort를 사용하면 삽입 시 O(NlogN) 시간 복잡도
// 그렇기 때문에 힙(heap) 자료구조 사용, 힙 사용하면 삽입 삭제 시 O(logN)만 소요

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