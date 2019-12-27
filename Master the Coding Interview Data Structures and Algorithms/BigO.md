What is good code?
1) Readability - can others understand your code
2) Scalability - is it scalable?

````
const nemo = ['nemo'];

function findNemo(array){
  for (let i = 0; i < array.length; i++){
    if (array[i] === 'nemo'){
      console.log('found NEMO!');
    }
  }
}

findNemo(nemo);
````

The runtime - how long does it take to run the code. How do we measure the efficiency of the code.
We see that adding more input, increases time to run a certain code.

Runtime depends on CPU's power, what types of programs are running at the time, and other factors.

In function findNemo, the run time complexity is O(n), which is linear time. n means that the run time depends on how big the number of inputs is.

Other linear functions:

````

function compressAllBoxes(boxes){
  boxes.forEach(function(item){
    console.log(item);
    });
};

const compressAllBoxes = boxes => {
  boxes.forEach(box => console.log(box));
};

````

* Big OsO(1) Constant- no loops
* O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
* O(n) Linear- for loops, while loops through n items
* O(n log(n)) Log Liniear- usually sorting operations
* O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
nested loops
* O(2^n) Exponential- recursive algorithms that solves a problem of size N
* O(n!) Factorial- you are adding a loop for every element

* Iterating through half a collection is still O(n)
* Two separate collections: O(a * b)

## What can cause time in a function?

* Operations (+, -, *, /)
* Comparisons (<, >, ==)
* Looping (for, while)
* Outside Function call (function())

## Rule Book

* Rule 1: Always worst Case
* Rule 2: Remove Constants
* Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
* for steps in order
* for nested steps
* Rule 4: Drop Non-dominant terms

## What causes Space complexity?

* Variables
* Data Structures
* Function Call
* Allocations
