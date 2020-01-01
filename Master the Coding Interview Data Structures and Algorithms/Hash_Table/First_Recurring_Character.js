// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5];
// It should return undefined

function firstRecurringCharacter(input){
  for (let i =0; i< input.length-1; i++){
    for (let j = i+1; j < input.length; j++){
      if (input[i] === input[j]){
        return input[i];
      }
    }
  }
  return undefined
}

// Code is inefficient due to O(n^2)
// This also compares only on a specific index. 

function firstRecurringCharacter2(input){
  let map = {};
  for (let i=0; i < input.length; i++){
    if(map[input[i]] !== undefined){
      return input[i]
    }
    else {
      map[input[i]] = i
    }
  }
  return undefined
}

// Code is more time efficient with an O(n). In terms of space complexity, it is now O(n) as you're creating an object.
