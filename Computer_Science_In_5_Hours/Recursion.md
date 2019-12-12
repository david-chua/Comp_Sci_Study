# Recursion

In programming, Recursion is a function that calls itself.
This technique is adept at some problem because of its ability to maintain state at different levels of recursion.

With recursion, code can be something really simple, but it inherently carries a large footprint with it as every time you call a function, it adds another call to the stack.

````
#Useless recursion:

let wr = (msg='------') => document.write(`<br>${msg}`);

function basicRecursion(max, current){
  if (current > max) return;
  wr(current);
  basicRecursion(max, current+1);
}

basicRecursion(5,1);
wr();
wr();


````

Fibonacci Sequence

````
function fibonacci(n){
  if (n <=2){
    return 1
  } else {
    return fibonacci(n-1) + fibonacci(n -2);
  }
};

Time complexity: O(2^n)

Factorial:

function factorial(n){
  if (n < 2) return 1;
  
  return n * factorial(n-1);
}
