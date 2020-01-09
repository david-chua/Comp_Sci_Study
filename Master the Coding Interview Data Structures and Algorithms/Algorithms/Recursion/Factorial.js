// Write two functions that finds the factorial of any number. One should be recursive. The other should just use a for loop.


function findFactorialRecursive(number){
  if (number == 2){
    return 2
  }
  return number * findFactorialRecursive(number -1);
}

//Time Complexity: O(n)
// Space Complexity: O(n)
// For every recursive function, the state is saved onto the call stack, till the value is computed and returned in the called function.
// Implicit stack is maintained.



function findFactorialIterative(number){
  let answer = 1;
  for (let i = 2; i <= number; i++){
    answer *= i
  }
  console.log(answer);
  return answer;
}

//Time Complexity - O(n)
// Space Complexity - O(1) 


findFactorialIterative(5)

let value = findFactorialRecursive(6)
console.log(value)
