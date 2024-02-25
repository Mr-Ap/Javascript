class Queue {
  constructor(arr) {
    this.queue = arr || [];
  }

  enqueue(ele) {
    this.queue.push(ele);
  }
  dequeue() {
    if (this.queue.length > 0) return this.queue.shift();
  }
  peek(position) {
    if (this.isEmpty) return "Queue is Empty!";
    return position
      ? position <= this.queue.length
        ? this.queue[position - 1]
        : "Invalid position"
      : this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  print() {
    console.log(queue.toString());
  }
}

class CircularQueue {
  constructor() {
    this.size = 5;
    this.circularQueue = new Array(this.size, null);
    this.front = -1;
    this.last = -1;
  }

  isFull() {
    return this.front === (this.last + 1) % this.size;
  }

  isEmpty() {
    return this.front === this.last;
  }

  enqueue(ele) {
    if (this.isFull()) {
      console.log("queue is full");
      return;
    }
    let nextIndex = (this.last + 1) % this.size;
    this.circularQueue[nextIndex] = ele;
    this.last = nextIndex;

    return;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    this.front = (this.front + 1) % this.size;
    const poppedEle = this.circularQueue[this.front];
    this.circularQueue[this.front] = null;

    return poppedEle;
  }

  print() {
    console.log(this.circularQueue.toString());
  }
}
