function addTo80(n){
  return  n + 80;
}

addTo80(5)
addTo80(5)
addTo80(5)

let cache = {};


// function memoizeAddTo80(n){
//   if (n in cache){
//     return cache[n];
//   } else{
//     console.log('long time');
//     cache[n] = n + 80;
//     return cache[n];
//   }
// }
//
//
// console.log('1', memoizeAddTo80(5));
// console.log('2', memoizeAddTo80(5));
// console.log('3', memoizeAddTo80(6));


// avoiding global scope

function memoizeAddTo80(n){
  let cache = {};
  return function(n){
    if (n in cache){
      return cache[n]
    } else{
      console.log('long time');
      cache[n] = n + 80;
      return cache[n]
    }
  }
}

const memoized = memoizeAddTo80();
console.log('1', memoized(5));
console.log('2', memoized(6));
