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

const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const n = +input[0];
const data = input[1].split(' ').map(Number);
const a = input[2].split(' ').map(Number);
const m = +input[3];
const b = input[4].split(' ').map(Number);

const q = new Queue();
const res = [];

for(let i = n - 1; i >= 0; i--){
  if(data[i] === 0)q.push(a[i]);
}

for(let i = 0; i < m; i++){
  q.push(b[i]);
  res.push(q.pop());
}

console.log(res.join(' '));