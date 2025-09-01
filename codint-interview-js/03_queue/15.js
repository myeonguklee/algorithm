// 원래는 queue head, tail로 관리하긴 했음

class Queue {
  q = [];
  front = 0;
  rear = 0;

  isEmpty() {
    return this.front === this.rear;
  }

  size() {
    return this.rear - this.front;
  }

  push(item) {
    this.q.push(item);
    this.rear++;
  }

  pop() {
    if(this.isEmpty()) return null;
    return this.q[this.front++];
  }
}

const n = 5
const k = 2

const q = new Queue ();
// const arr = Array(n).fill().map((_, i) => i + 1);
// const answer = [];

for(let i = 1; i <= n; i++){
  q.push(i);
}

// while(q.size()){
//   for(let i = 0; i < k - 1; i++){
//     const a = q.pop();
//     q.push(a);
//   }
//   const b = q.pop();
//   answer.push(b);
// }
//
// console.log(answer[n - 1]);

while(q.size() === 1){
  for(let i = 0; i < k - 1; i++){
    const a = q.pop();
    q.push(a);
  }
  q.pop();
}

console.log(q.pop());