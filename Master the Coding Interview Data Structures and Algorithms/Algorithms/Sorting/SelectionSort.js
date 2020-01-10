// Selection sort, find the smallest item then look at other items further in the list to see if there's a smaller item.
// If item ahead is smaller, this becomes smallest and the list continues to check further until the end of the array then
// moves this item into the spot in the list.

function selectionSort(arr){
  for(let i =0; i< arr.length;i++){
    let min = i;
    let temp = arr[i];
    for (let j=i+1; j < arr.length; j++){
      if (arr[j] < arr[min]){
        // update minimum if current is lower than what we prviously had.
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

numbers = [2,45,23,5,17,22,53,1,4];

selectionSort(numbers);
console.log(numbers);
