class Queue {
  constructor() {
    this.q = [];
    this.head = -1;
    this.tail = -1
  }

  push(item){
    this.q.push(item);
    this.tail++;
  }

  size(){
    return this.tail - this.head;
  }

  empty(){
    return (this.head === this.tail);
  }

  pop(){
    if(this.empty()){
      throw new Error('Queue is empty');
    }
    return this.q[++this.head];
  }

  front(){
    if(this.empty()){
      throw new Error('Queue is empty');
    }
    return this.q[this.head + 1];
  }
}