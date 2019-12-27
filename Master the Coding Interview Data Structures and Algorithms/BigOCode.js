const nemo = ['nemo'];
const large = new Array(10000).fill('nemo')
function findNemo(array){
    // let t0 = performance.now()
  for (let i = 0; i < array.length; i++){
    if (array[i] === 'nemo'){
      console.log('found NEMO!');
    }
  }
 // let t1 = performance.now();
  console.log('Call to find Nemo took' + (t1-t0) + 'milliseconds');
}

findNemo(nemo);

// O(1) - Constant Time Example:

function compressFirstBox(boxes){
  console.log(boxes[0]);
};

// Rule 2
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)


function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])
