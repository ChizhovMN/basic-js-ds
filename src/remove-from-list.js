const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
function removeKFromList(l, k) {
  let arr = [];
  let copyList = Object.assign({}, l)
  while (copyList.next) {
    arr.push(copyList.value);
    copyList = copyList.next
  }
  arr.push(copyList.value)
  arr = arr.filter(item => item !== k);
  let nodes = [];
  for (let i = 0; i < arr.length; i++) {
    let node = {};
    node.value = arr[i];
    node.next = null;
    nodes.push(node);
  }
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }
  return nodes[0];
}
module.exports = {
  removeKFromList
};
