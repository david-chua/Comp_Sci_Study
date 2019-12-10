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
