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
