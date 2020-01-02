## What is a program?
- Allocate
- Parse and Execute

## JavaScript engine: Chrome and V8
Engine consist of two parts: memory heap and call stack

1. Memory heap - where memory allocation happens
2. Call stack - where code is read and executed.

````
const a = 1;
const b = 10;
const c = 100;

````

Memory Leak - There's a limited amount of memory. Memory leaks happen when you have unused memory just laying around and it fills up the memory heap.
Global variables are bad because if we forget to clean up, memory heap will stop working.

Call Stack:
````
console.log('1');
console.log('2');
console.log('3');

````
Call stack reads and executes script.
JavaScript Engine adds item into the stack and runs it

````
const one = () => {
  const two = () => {
    console.log('4');
  }
  two();
}
````

console..log('4');
two()
one()

JavaScript then removes this one by one.

JavaScript is single threaded. You can only do one thing at a time.
Issues with multi-threaded - deadlock.

JavaScript is synchronous. Only one statement is executed at a time.
With synchronous tasks, everything has to wait til the main task executing is finished before it goes to the next task.

Stack Overflow: When a stack has more memory than what is available.

````
function foo(){
  foo()
}

foo();
````

The following code will continue re-running program indefinitely, causing a stack overflow.

## setTimeout()

````
console.log('1');
setTimeout(()=>{
  console.log('2');
}, 2000);
console.log('3');
````
