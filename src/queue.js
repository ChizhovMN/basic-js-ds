const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.array = [];
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    if (this.array.length === 0) {
      return null
    }
    let listNodes = []
    for (let i = 0; i < this.array.length; i++) {
      const listNode = {}
      listNode.value = this.array[i]
      listNode.next = null;
      listNodes.push(listNode)
    }
    for (let i = 0; i < listNodes.length - 1; i++) {
      listNodes[i].next = listNodes[i + 1];
    }
    return listNodes[0]
  }
  enqueue(val) {
    this.array.push(val)
  }

  dequeue() {
    return this.array.shift();
  }
}


module.exports = {
  Queue
};
