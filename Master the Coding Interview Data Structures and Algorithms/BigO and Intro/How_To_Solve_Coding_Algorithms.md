## How to Solve Coding Problems:

This section prepares you to have the foundations laid out.

It's not necessarily about solving the problems but the though process.

Understand the tradeoffs

Build the Fundamentals. Understand the Whys.

The interview is not about memorizing the data structures and algorithms. Know and understand the process instead of memorization.

## What are Companies looking for?

1. Analytic Skills
2. Coding Skills
3. Technical Skills
4. Communication Skills

## Data structures

* Arrays
* Stacks
* Queues
* Linked Lists
* Trees
* Tries
* Graphs
* Hash Tables

## Algorithms

* Sorting
* Dynamic Programming
* BFS + DFS (Searching)
* Recursion

## Exercise: Interview question

Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contains any common items.

For Example:

````
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

* Explain Approach even if you think you know the problem.
* Make sure you understand what you're solving for.
* Can ask interviewer how big does the array get.
* What's more important? Time or Space Complexity?
* 2 Parameters - no size limit
* You can ask question but make sure you're solving and keeping time in mind as coding challenges typically have a time limit.

* You can use nested loops but this would be inefficient / brute force and going through each item on the arrays.
* This gives an O(n^2) efficiency

function constainsCommonItem(arr1,arr2){
  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      if (arr1[i] === arr2[j]){
        return true
      }
    }
  }
  return false;
}
// O(n^2)
// Space Complexity: O(1) since no new data is created besides returning true or false

// array 1 ==> obj {
  a: true,
  b: true,
  c: true,
  x: true
}
array2[index] === obj.properties

function containsCommonItem2(arr1, arr2){
  // loop through first array and create object where properties === items in the array  
  let map = {};
  for (let i = 0; i < arr1.length; i++){
    if (!map[arr1[i]]){
      const item = arr1[i]
      map[item] = true;
    }
  }  
  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++){
    if (map[arr2[j]]){
      return true
    }
  }
  return false
}

// O(a +b ) ==> O(n) Time Complexity
// O(a) - Space Complexity
// Only numbers and string works properly.
// Faster but uses a lot of space.

function containsCommonItems3(arr1,arr2){
    return arr1.some(item => arr2.includes(item))
}


## Summary:

* Train solving problems - This takes practice 
