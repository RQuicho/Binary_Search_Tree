class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {

    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    let found = false;

    if (val === currentNode.val) return currentNode;
    while (currentNode && !found) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return currentNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (currentNode === null) return undefined;

    if (val < currentNode.val) {
      if (currentNode.left === null) return undefined;
      return this.findRecursively(val, currentNode.left);
    } else if (val > currentNode.val) {
      if (currentNode.right === null) return undefined;
      return this.findRecursively(val, currentNode.right);
    } 
    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS (depth first search).
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodes = [];
    let current = this.root;
   
    const traverse = (node) => {
      visitedNodes.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
   
    traverse(current);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS (depth first search).
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedNodes = [];
    let current = this.root;
   
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visitedNodes.push(node.val);
      if (node.right) traverse(node.right);
    }
   
    traverse(current);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS (depth first search).
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodes = [];
    let current = this.root;
   
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedNodes.push(node.val);
    }
   
    traverse(current);
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS (breadth first search).
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let visitedNodes = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift(); // shift removes first element and returns that removed element.
      visitedNodes.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
