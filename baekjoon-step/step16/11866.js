const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

class Queue {
  constructor(){
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  push(element){
    this.items[this.backIndex] = element;
    this.backIndex++;
  }

  pop(){
    if(this.isEmpty()) return -1;
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  size(){
    return this.backIndex - this.frontIndex;
  }

  isEmpty(){
    return this.size() === 0;
  }

  front(){
    if(this.isEmpty()) return -1;
    return this.items[this.frontIndex];
  }

  back(){
    if(this.isEmpty()) return -1;
    return this.items[this.backIndex - 1];
  }
}

const q = new Queue();
const res = [];

for(let i = 1; i <= n; i++){
  q.push(i);
}

for(let i = 0; i < n; i++){
  for(let j = 0; j < k - 1; j++ ){
    q.push(q.pop());
  }
  res.push(q.pop());
}

console.log('<' + res.join(', ') + '>');
