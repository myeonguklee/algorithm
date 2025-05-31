const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];

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
  if(input[i].startsWith('push')){
    const a = input[i].split(' ');
    q.push(+a[1]);
  }
  else if(input[i] === 'pop'){
    res.push(q.pop());
  }
  else if(input[i] === 'size'){
    res.push(q.size());
  }
  else if(input[i] === 'empty'){
    res.push(q.isEmpty() ? 1 : 0);
  }
  else if(input[i] === 'front'){
    res.push(q.front());
  }
  else if(input[i] === 'back'){
    res.push(q.back());
  }
}
console.log(res.join('\n'));
