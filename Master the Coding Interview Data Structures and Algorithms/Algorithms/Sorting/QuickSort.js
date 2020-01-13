// Quick Sort - O(n log n)
// Quick Sort uses pivoting technique until they are sorted.

//  3 7 8 5 2 1 9 5 4
// place item to left or right of pivot
//3 1 2     4     5 8 9 5 7
// use 2 as a pivot  and use 7 as a pivot

//123   4      55 7 98
//              use 8 as pivot
//                  89
// 123455789

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right){
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    quickSort(array, left, partitionIndex-1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++){
    if (array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

quickSort(numbers, 0, numbers.length -1);
console.log(numbers. )
