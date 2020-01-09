# Sorting

````
const letters = ['a', 'd', 'z','e', 'r','b'];

letters.sort();
````

Sorting with larger data sets is when this becomes more important.


````
The sort() method sorts the element array in place and returns the array.
The default sort order is according to string Unicode code points.

Array.sort()

const basket = [2,65,34,2,1,7,8];
basket.sort(); // [2,65,34,2,1,7,8]; -- Incorrect due to the unicode points.
````

Another example:

````
localCompare() - method returns a number indicating whether a reference sstring comes before or after or is the same as the given string in order.
````

You can use the following to sort numbers

````
basket.sort(function(a,b) {
  return a - b;
});
````
## Sorting Algorithms
