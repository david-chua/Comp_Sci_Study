# Four Semesters of Computer Science in 5 Hours:

Big O is the way we analyze how efficient our code is without getting too mired in the details.

Example:
3x^2 + x + 1 where x = 5, the first term is 75, the second is 5, and the third is 1.
If we do x = 5,000,000, the first term is 75,000,000,000, the second term is 5,000,000 an the last is 1.

We look at the biggest term and ignore the little parts. In the Big O, the biggest term is just absorbing all the other fluff.

We use Big O in terms of time and spatial analysis.

Finding Big O

````function crossAdd(input){
  var answer = [];
  for (var i = 0; i < input.length; i++){
    var goingUp = input[i];
    var goingDown = input[input.length -1 -i];
    answer.push(goingUp + goingDown);
  }
  return answer;
}
````
We're going to do one loop over everything and go over everything once. In function crossAdd, the Big O is O(n)

````
function find(needle, haystack){
  for (int =0; i < haystack.length; i++){
    if (haystack[i] === needle) return true;
  }
}
````

We look at the worst case scenario, but there is a potential that needle is at the very end of the haystack. This means that in the worst case, Big O is O(n)

````
function makeTuples(input){
  var answer = [];
  for (var i = 0; i < input.length; i++){
    for (var j = 0; j < input.length; i++){
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}
````

This would be O(n^2). For every input, we have to go through a full loop inside of another full loop. This means that we're doing a lot of work. The trick is to look for loops. A loop inside of a loop inside a loop would be O(n^3).


If we have no loops and just do something and exit/return, the it's said we're doing it in constant time. or O(1).

You can also have O(log n) if a code employs a divide and conquer strategy (often recursive). This means that as you add more terms, the increases in time as you add input diminishes.
