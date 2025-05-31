class Deque {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  pushBack(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }

  pushFront(element) {
    this.frontIndex--;
    this.items[this.frontIndex] = element;
  }

  popFront() {
    if (this.isEmpty()) return -1;
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  popBack() {
    if (this.isEmpty()) return -1;
    this.backIndex--;
    const item = this.items[this.backIndex];
    delete this.items[this.backIndex];
    return item;
  }

  front() {
    return this.isEmpty() ? -1 : this.items[this.frontIndex];
  }

  back() {
    return this.isEmpty() ? -1 : this.items[this.backIndex - 1];
  }

  size() {
    return this.backIndex - this.frontIndex;
  }

  isEmpty() {
    return this.size() === 0 ? 1 : 0;
  }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const dq = new Deque();
const res = [];

const n = +input[0];
for(let i = 1; i <= n; i++){
  const[a, b] = input[i].split(' ').map(Number);

  switch (a) {
    case 1:
      dq.pushFront(b);
      break;
    case 2:
      dq.pushBack(b);
      break;
    case 3:
      res.push(dq.popFront());
      break;
    case 4:
      res.push(dq.popBack());
      break;
    case 5:
      res.push(dq.size());
      break;
    case 6:
      res.push(dq.isEmpty());
      break;
    case 7:
      res.push(dq.front());
      break;
    case 8:
      res.push(dq.back());
      break;
  }
}

console.log(res.join('\n'));