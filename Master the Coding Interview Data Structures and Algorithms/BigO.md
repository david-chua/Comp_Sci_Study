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


## O(1)

````
function compressFirstBox(boxes){
  console.log(boxes[0]);
};

````
This type of function is in constant time. This means that no matter how big the input it, it's grabbing the specific item in the array.

````
function logFirstTwoBoxes(boxes){
  console.log(boxes[0]);      // O(1)
  console.log(boxes[1]);      // O(1)
}

logFirstTwoBoxes(boxes)      // O(2)
````
When it comes to constant time, we round it to simply O(1) -- constant time. In terms of scalability, there is a constant amount of time in a function.

````
function funChallenge(input) {
  let a = 10;             // O(1)
  a = 50 + 3;             // O(1)

  for (let i = 0; i < input.length; i++) {    // O(n)
    anotherFunction();                  // O(n) as it is triggered the same amount of times as the input length
   let stranger = true;                 // O(n) as it is triggered the same amount of times as the input length
    a++;                                // O(n) as it is triggered the same amount of times as the input length
  }
  return a;       // O(1)
}

funChallenge() // O(3 + 4n) => O(n)
````

Exercise 2:

````
function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}

anotherFunChallenge(input)  // O(4 + 5n) => O(n)
````

Simplifying Big O -
