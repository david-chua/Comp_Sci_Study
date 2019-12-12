# Sorting

Bubble Sort - One of the least efficient in executions.
Bubble sorts continually loops through an array comparing adjacent indexes until the entire array is sorted.

In Bubble Sort, we're going to loop through the array and compare each index with the index next to it. If those two numbers are out of order ( the lesser index's value is greater than the greater index's value), we swap the two numbers' places in the array. We keep looping over that array until everything is placed and nothing was swapped during the last iteration.

Big O of Bubble Sort is O(n^2) as you have two loops nested with each other.

# Bubble Sort Code:

````
const bubbleSort = (nums) => {
  do {
    let swapped = false;
    for ( let i = 0; i < nums.length; i++){
      snapshot(nums);

      if (nums[i] > nums[i+1]){
        const temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
````

# Insertion Sort:
