// Insertion Sort - useful for times when list is almost sorted.
// Best case scenario - O(n)
// looks at item and moves item one at a time


const numbers = [9, 44, 6, 2, 1,5,63,87, 283, 4,0];

// function insertionSort(array){
//   const length = array.length;
//   for (let i = 0; i < length; i++){
//     if (array[i] < array[0]){
//       array.unshift(array.splice(i,1)[0]);
//     } else {
//       for (let j = 1; j< i; j++){
//         if (array[i] > array[j-1] && array[i] < array[j]){
//           array.splice(j,0,array.splice(i,1)[0]);
//         }
//       }
//     }
//   }
// }



// const insertionSort = arr => {
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     let el = arr[i];
//     let j;
//     for (j = i - 1; j >= 0 && arr[j] > el; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = el;
//   }
//   return arr;
// };

function insertionSort(array){
  const length = array.length;
  for (let i = 0; i < length; i++){
    let el = array[i];
    let j = i -1;
    while (j >=0 && array[j] > el){
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = el;
  }
  return array;
}

insertionSort(numbers);
console.log(numbers);
