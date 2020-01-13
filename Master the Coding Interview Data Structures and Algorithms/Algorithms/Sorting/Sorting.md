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

There are a lot of coding algorithms.

Helps to understand the tradeoffs between each different sorting algorithms.

## Which sorting is the best.

- Insertion sort should be used in small items. It uses little space and very easy to implement.
- Bubble sort - not really going to use. Not very efficient.
- Selection sort - not really going to use. Not efficient.
- Merge sort - really good because of divide and conquer. It's fast and use O(n) space complexity.
- Radix/Counting/Bucket sort.


Counting Sort and Radix sort uses numbers exclusively.

Sorting Questions: Pick the types of sorting to use.

//#1 - Sort 10 schools around your house by distance:

- Insertion Sort - small sorts, easy to code and it has space complexity of O(1).

//#2 - eBay sorts listings by the current Bid amount:

-Radix or counting sort. (numbers that need to be sorted).  

//#3 - Sport scores on ESPN

- Quick sort - most efficient and has better space complexity (O(log n) than merge sort (O(n))

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data

- Merge sort - not sorting in memory. Always O(n log n) for time complexity.

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews

- Insertion sort or Binary Insertion

//#6 - Temperature Records for the past 50 years in Canada

- Radix or counting sort
- Could also use Quick Sort

//#7 - Large user name database needs to be sorted. Data is very random.

- Merge sort if there's enough memory
- quick sort if not too worried about worst case.

//#8 - You want to teach sorting for the first time

- Bubble sort, selection sort. 
