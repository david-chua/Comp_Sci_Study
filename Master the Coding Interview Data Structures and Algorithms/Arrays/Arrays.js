const strings = ['a', 'b', 'c', 'd'];
// 4* 4 ==> Uses 16 bytes of memory(RAM)
// by assignign the value, computer now has data of where this is stored.

strings[2] // returns 'c'

// In JavaScript:
// .push
strings.push('e'); // O(1) as this adds it on the end of an array.

// .pop() - remove the last item from the array.
strings.pop(); // ['a', 'b', 'c', 'd']; O(1)
strings.pop(); // ['a', 'b', 'c']; // O(1)

// unshift - adds item in beginning of an array
strings.unshift('x'); // ['x', 'a', 'b', 'c']; --> Time Complexity: O(n) as this adds data in beginning and moves the rest by an index of +1.

//splice - adds item in middle
// first value is where splice happens, second value is how many items to delete,  third value onwards is what is to get added.
strings.splice(2,0, 'alien'); // ['x', 'a', 'alien', 'b', 'c'];
