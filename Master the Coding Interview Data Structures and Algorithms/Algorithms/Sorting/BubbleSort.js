// How bubble sort works
 // 6  5  3  1  8  7  2  4
 // 65  3 1 8 7 2 4
 // 5 63 1 8 7 2 4
 // 5 3 61 8 7 2 4
 // 5 3 1 68 7 2 4
 // 5 3 1 6 87 2 4
 // 5 3 1 6 7 82 4
 // 5 3 1 6 7 2 84
 // 5 3 1 6 7 2 4 8
 //  then we do this again until we have a sorted list.

 // Time Complexity: O(n^2)
 // Space: O(1) - no extra memory is created. We sort in place

const numbers = [99, 44, 6, 2,1,5, 63, 87, 283, 4, 0];

function bubbleSort(array){
  const length = array.length;
  for (let i = 0; i < length; i++){
    for (let j = 0; j < length; j++){
      if(array[j] > array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
