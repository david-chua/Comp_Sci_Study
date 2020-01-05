# Trees

Considered Hierarchical as every child descend from one parent.
Leaf notes - very end of Trees
Subtrees - portion of a tree

Linked List is basically a type of tree with only one path.

In a tree, there is only 1 entry point and only points from parent to child.


## Binary Tree

* Each node can only have 0,1 or 2 nodes.
* Each node represents a certain state.

````
function BinaryTreeNode(value){
  this.value = value
  this.left = null;
  this.right = null;
}
````
Start of tree.
* Perfect Binary Tree - all nodes are full and bottom layer is fully filled
* Full Binary tree - all nodes either have 0 or 2 children.

Perfect Binary Tree -
Level 0: 2^0 = 1;
Level 1: 2^1 = 2;
Level 2: 2^2 = 4;
Level 3: 2^3 = 8;

# of nodes = 2^h -1
````
log nodes = steps

log 100 = 2
10^2 = 100
````

Based on the height, the maximum number of decisions are log height.

Time Complexity:

* Lookup - O(logN)
* Insert - O(logN)
* Delete - O(logN)

You need to only explore a subset before finding an item.

O(log n) is a really good time complexity.

## Binary Search Tree - Really efficient tree.
