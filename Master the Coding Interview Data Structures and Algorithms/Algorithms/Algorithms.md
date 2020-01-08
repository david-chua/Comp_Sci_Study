# Algorithms

Algorithms are just steps to perform a desired process.

Algorithms allow us to data structures

* Sorting
* Dynamic Programming
* BFS + DFS (Searching)
* Recursion

By learning the listed algorithms, we can look into scaling and how to improve our programs.

Certain algorithms allow us to simplify time complexity.

## Recursion Introduction

Recursion is a function that refers to itself.

````
function inception(){
  inception();
};
````

Recursion is really good when there's a repeated subtask

You can use it to traverse a tree.

## Stack Overflow

Difficult to understand at first.

Stack overflow - A function calls itself longer than the stack size. function calls stacking on top of each other without anything being removed in the stack until memory limit is reached or a program limit is reached. This can cause programs to crash due to running out of memory.


## Anatomy of Recursion

Each recursion should have a base case - what stops the recursion function.
The other path is the recursive case - which calls the function again.

To add a base case in the function, we have to provide a condition that stops the recursion.

````
let counter = 0;

function inception(){
  if (counter > 3){
    return 'done';
  }
  counter++;
  return inception();
}
````

## Rules for recursion

1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 returns: 1 for base case and one for recursive case.
