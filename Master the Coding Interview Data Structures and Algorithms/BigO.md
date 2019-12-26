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
