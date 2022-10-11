const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    const addData = function (node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
    this._root = addData(this._root, data);
  }

  has(data) {
    const searchData = function (node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ?
        searchData(node.left, data) :
        searchData(node.right, data);
    }
    return searchData(this._root, data);
  }

  find(data) {
    const findData = function (node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data ?
        findData(node.left, data) :
        findData(node.right, data);
    }
    return findData(this._root, data);
  }

  remove(data) {

    const removeData = function (node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeData(node.right, minFromRight.data);

        return node;
      }
    }
    this._root = removeData(this._root, data);
  }

  min() {
    if (!this._root) {
      return;
    }
    let minNode = this._root;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data
  }

  max() {
    if (!this._root) {
      return;
    }
    let maxNode = this._root;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data
  }
}

module.exports = {
  BinarySearchTree
};