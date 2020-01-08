Recursions contains base case (where recursion stop) and the steps to get to the base case.

Example of Recursion is a binary search

````
Search for a number - num = 5

let array = [1,2,3,4,5,6];

Cut array in half:
[1,2,3] [4,5,6]
      [4], [5,6]
            [5], [6]
            We found our 5.
In Binary Search we break the array down in smaller and smaller pieces.
