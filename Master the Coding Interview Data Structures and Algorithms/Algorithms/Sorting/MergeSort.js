// Merge Sort and Quick Sort uses divide and conquer.
// Divide and conquer usually gives O(n log n);

// Merge Sort:

//            6 5 3 1 8 7 2 4
//      6 5 3 1         8 7 2 4
//   6 5   3 1            8 7   2 4
// 6  5  3  1              8  7  2  4
// then you compare doubles
// 5 6   1 3              7 8    2 4
//  1 3 5 6                   2 4 7 8
// 1 2 3 4 5 6 7 8 <-- sorted list.

// time complexity: O(n log n)
// space complexity: O(n);

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array){
  if (array.length === 1){
    return array
  }
  // Split array into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
