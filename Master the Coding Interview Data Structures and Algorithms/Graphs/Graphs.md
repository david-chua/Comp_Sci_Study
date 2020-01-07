## Graphs

Set of value that are related in a pair-wise fashion.

Each item is called a node or vertex.
Nodes are connected with edges.

Graphs are great data structures for representing relationships.

Graphs encompass Trees and Linked List.

## Types of Graphs

* Directed - You can only go in one direction (Facebook)
* Undirected - One way street. (Twitter)

* Weighted Graphs - You can get the shortest path when you calculate optimal number.
* Unweighted Graphs

* Cyclic - Going from starting node to somewhere else and back to starting. (Like a circle)
* Acycling - Not a full circle.


## Graphs Data
Graphs are built on top of other data structures.

// Edge list

````
const graph = [[0,2], [2,3], [2,1], [1,3]];
````

// Adjacent List
````
const graph = [[2], [2,3], [0,1,3], [1,2]];
````

// Adjacent Matrix
````
const graph = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0]
]

or

const graph = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0]
}
````

Graphs

Pros:

* Relationshps

Cons:

* Scaling is hard 
