#Traversals

Breadth First Traversals
Depth First Traversals

Bread First uses more memory - tracking every node and its children in order.



Depth First Search - follows one branch of a tree until the target node is found or end is reached.

//     9
//   4   20
// 1  6  18 23

BFS - [9,4,20,1,6,18,23]
DFS - [9,4,1,6,20,18,23]

BFS Pros and Cons

Pros:

- Good for shortest path
- Closer Nodes

Cons:

- It requires more memory

DFS Pros and Cons

- Less memory
- Does Path exist?

Pros:

- Can get slow since it can get really deep.

When to use the different types of traversals.

// If you know the solution is not far from the root of the tree:
- BFS

// If the tree is very deep and solutions are rare:
- BFS (DFS will take too long)

// If the tree is very wide:
- DFS (BFS will need too much memory)

// If solutions are frequent but located deep in the tree:
- DFS

// Determining whether a path exists between two nodes:
-DFS

// Finding the shortest path:
- BFS
